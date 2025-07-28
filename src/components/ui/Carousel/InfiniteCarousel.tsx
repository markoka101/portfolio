import {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useLayoutEffect,
	useMemo,
	useRef,
	useState
} from 'react';
import { twMerge } from 'tailwind-merge';
import { Controls } from './components/Controls';
import { Indicators } from './components/Indicators';
import { useAutoPlay } from './hooks/useAutoPlay';
import { useDrag } from './hooks/useDrag';
import { useKeyboard } from './hooks/useKeyboard';
import { type CarouselProps, type CarouselRef } from './types';

const InfiniteCarousel = forwardRef<CarouselRef, CarouselProps>(
	(
		{
			items,
			containerClassName = '',
			trackClassName = '',
			slideClassName = '',
			slideActiveClassName = '',
			indicatorActiveClassName = '',
			indicatorClassName = '',
			indicatorContainerClassName = '',
			controlClassName = '',
			PrevIcon,
			NextIcon,
			dragResistance = 1,
			autoPlay = false,
			autoPlayInterval = 3000,
			gap = 0,
			showControls = true,
			showIndicators = true,
			pauseOnHover = true,
			onSlideChange,
			ariaLabel = 'Image carousel',
			ariaDescribedBy,
			announceSlideChanges = true,
			reduceMotion = false,
			role = 'region',
			...props
		},
		ref
	) => {
		const N = items.length;
		const MIDDLE_START = N;

		const extendedItems = useMemo(
			() => [
				...items.map((item, i) => ({ ...item, key: `first-${i}` })),
				...items.map((item, i) => ({ ...item, key: `middle-${i}` })),
				...items.map((item, i) => ({ ...item, key: `last-${i}` }))
			],
			[items]
		);

		const [currentIndex, setCurrentIndex] = useState(MIDDLE_START);
		const [itemWidth, setItemWidth] = useState(0);
		const [isPaused, setIsPaused] = useState(false);

		const trackRef = useRef<HTMLDivElement>(null);
		const containerRef = useRef<HTMLDivElement>(null);
		const initRef = useRef(false);

		function normalizeToReal(extended: number): number {
			return (((extended - MIDDLE_START) % N) + N) % N;
		}

		const updateTransform = useCallback(
			(extIndex: number, offset = 0) => {
				if (!trackRef.current) return;
				const x = -extIndex * (itemWidth + gap) + offset;
				trackRef.current.style.transform = `translate3d(${Math.round(x)}px,0,0)`;
			},
			[itemWidth, gap]
		);

		// Navigation helpers
		const goToSlide = useCallback(
			(targetReal: number) => {
				const idx = ((targetReal % N) + N) % N;
				let ext: number;
				if (targetReal < 0) {
					ext = MIDDLE_START - 1;
				} else if (targetReal >= N) {
					ext = MIDDLE_START + N;
				} else {
					ext = MIDDLE_START + idx;
				}
				setCurrentIndex(ext);
				updateTransform(ext);
				onSlideChange?.(idx);
			},
			[N, MIDDLE_START, updateTransform, onSlideChange]
		);
		const goNext = useCallback(() => {
			const ext = currentIndex + 1;
			setCurrentIndex(ext);
			updateTransform(ext);
		}, [currentIndex, updateTransform]);
		const goPrev = useCallback(() => {
			const ext = currentIndex - 1;
			setCurrentIndex(ext);
			updateTransform(ext);
		}, [currentIndex, updateTransform]);

		// Handle end
		const handleTransitionEnd = useCallback(() => {
			if (currentIndex < MIDDLE_START || currentIndex >= MIDDLE_START + N) {
				const el = trackRef.current!;

				el.style.transition = 'none';

				const real = normalizeToReal(currentIndex);
				const snapIndex = MIDDLE_START + real;

				setCurrentIndex(snapIndex);
				el.style.transform = `translate3d(${-snapIndex * (itemWidth + gap)}px,0,0)`;

				void el.offsetHeight;

				requestAnimationFrame(() => {
					el.style.transition = 'transform 0.3s ease-out';
				});
			}

			onSlideChange?.(normalizeToReal(currentIndex));
		}, [currentIndex, MIDDLE_START, N, itemWidth, gap, onSlideChange]);

		// Width measurement & init
		useLayoutEffect(() => {
			const measure = () => {
				const w = containerRef.current?.clientWidth || 0;
				if (w > 0) {
					setItemWidth(w);
					initRef.current = true;
				}
			};
			measure();
			window.addEventListener('resize', measure);
			return () => window.removeEventListener('resize', measure);
		}, []);

		useEffect(() => {
			if (!initRef.current || itemWidth === 0) return;
			// disable transition and snap
			const el = trackRef.current!;
			el.style.transition = 'none';
			const startIndex = MIDDLE_START;
			updateTransform(startIndex, 0);
			void el.offsetHeight;
			requestAnimationFrame(() => {
				el.style.transition = 'transform 0.3s ease-out';
			});
		}, [itemWidth, updateTransform]);

		// Drag/other hooks
		const { isDragging, ...dragHandlers } = useDrag({
			currentIndex,
			totalItems: N,
			extendedLength: N * 3,
			itemWidth,
			resistance: dragResistance,
			gap,
			onSlideChange: setCurrentIndex,
			updateTransform,
			isTransitioning: false
		});

		const { pause, resume } = useAutoPlay({
			autoPlay: autoPlay && !isPaused,
			interval: autoPlayInterval,
			isDragging,
			isTransitioning: false,
			onNext: goNext
		});

		const handleMouseEnter = useCallback(() => {
			if (!pauseOnHover) return;
			pause();
			setIsPaused(true);
		}, [pauseOnHover, pause]);
		const handleMouseLeave = useCallback(() => {
			if (!pauseOnHover) return;
			resume();
			setIsPaused(false);
		}, [pauseOnHover, resume]);

		useKeyboard({
			containerRef,
			onNext: goNext,
			onPrev: goPrev,
			onGoTo: goToSlide,
			totalItems: N,
			currentIndex: normalizeToReal(currentIndex),
			isTransitioning: false,
			autoPlay,
			onPause: handleMouseEnter,
			onResume: handleMouseLeave
		});
		// Expose API
		useImperativeHandle(ref, () => ({
			goToSlide,
			goToNext: goNext,
			goToPrev: goPrev,
			getCurrentIndex: () => normalizeToReal(currentIndex),
			pause: handleMouseEnter,
			resume: handleMouseLeave,
			focus: () => containerRef.current?.focus()
		}));

		return (
			<div
				ref={containerRef}
				className={twMerge('carousel snap-x snap-mandatory', containerClassName)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				role={role}
				aria-label={ariaLabel}
				aria-describedby={ariaDescribedBy}
				{...props}
			>
				<div
					ref={trackRef}
					className={twMerge(
						'carousel-track flex transition-transform duration-300 ease-out will-change-transform',
						trackClassName
					)}
					onTransitionEnd={handleTransitionEnd}
					{...dragHandlers}
					style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }}
					role="presentation"
				>
					{extendedItems.map((slide, i) => (
						<div
							key={slide.key}
							className={twMerge(
								'carousel-item w-full flex-shrink-0 snap-center',
								i === currentIndex && 'carousel-item--active',
								slideClassName,
								i === currentIndex && slideActiveClassName
							)}
							style={{ marginRight: gap }}
							aria-hidden={i !== currentIndex}
						>
							{slide.content}
						</div>
					))}
				</div>

				{showControls && (
					<Controls
						onPrev={goPrev}
						onNext={goNext}
						NextIcon={NextIcon}
						PrevIcon={PrevIcon}
						className={twMerge('carousel-control', controlClassName)}
					/>
				)}

				{showIndicators && (
					<Indicators
						totalItems={N}
						currentIndex={normalizeToReal(currentIndex)}
						containerClassName={indicatorContainerClassName}
						indicatorClassName={indicatorClassName}
						activeIndicatorClassName={indicatorActiveClassName}
						onIndicatorClick={goToSlide}
					/>
				)}
			</div>
		);
	}
);

InfiniteCarousel.displayName = 'InfiniteCarousel';
export default InfiniteCarousel;
