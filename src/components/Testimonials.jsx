import { Helmet } from 'react-helmet-async';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/TestimonialData';

export default function Testimonials() {
	return (
		<>
			<Helmet>
				<title>Testimonials | Mark Oka Portfolio</title>
				<meta
					name="description"
					content="Read testimonials from clients and colleagues about Mark Oka's work as a software engineer."
				/>
				<meta property="og:title" content="Testimonials | Mark Oka Portfolio" />
				<meta
					property="og:description"
					content="Feedback and testimonials for Mark Oka, software engineer based in New York."
				/>
			</Helmet>
			<section id="testimonials" className="animate-fadeIn mx-auto flex flex-col">
				<div className="mx-auto my-10 flex w-full flex-col items-center lg:w-[1000px] xl:w-[1200px]">
					{testimonials.map((test) => {
						return (
							<TestimonialCard
								key={test}
								name={test.name}
								avatar={test.icon}
								profession={test.profession}
								review={test.review}
								customStyles="!w-11/12  "
								avatarAlt={test.alt}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
}
