import React from 'react';
import { Alert } from 'flowbite-react';

export default function Contact() {
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [allFields, setAllFields] = React.useState(false);
	const [sent, setSent] = React.useState(false);
	const [errBanner, setErrBanner] = React.useState(false);

	function encode(data) {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
			setAllFields(true);
			return;
		}

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', name, email, message })
		})
			.then(() => {
				setErrBanner(false);
				setAllFields(false);
				setSent(true);
			})
			.catch((err) => {
				setSent(false);
				setAllFields(false);
				setErrBanner(true);
				console.log(err);
			});
	}

	return (
		<section id="contact" className="flex flex-col justify-center">
			{sent === true ? (
				<Alert color="success" onDismiss={() => setSent(false)}>
					<p className="font-medium">Message Sent!</p>
				</Alert>
			) : null}

			{errBanner === true ? (
				<Alert color="failure" onDismiss={() => setErrBanner(false)}>
					<p className="font-medium">Something Went Wrong!</p>
				</Alert>
			) : null}

			{allFields === true ? (
				<Alert color="failure" onDismiss={() => setAllFields(false)}>
					<p className="font-medium">Please fill in all fields!</p>
				</Alert>
			) : null}

			<div className="container mx-auto my-5 flex flex-wrap px-5 py-5 sm:my-16 sm:flex-nowrap sm:py-10 md:my-16 md:py-10 lg:my-16 lg:py-10">
				<form
					netlify
					name="contact"
					onSubmit={handleSubmit}
					className="mt-8 flex w-full flex-col rounded-xl border-4 border-slate-500 bg-black bg-opacity-85 p-5 md:mx-auto md:mt-0 md:py-8 lg:w-1/2"
				>
					<h2 className="title-font mb-1 text-3xl font-medium text-white sm:text-4xl">
						Contact Me
					</h2>
					<p className="mb-5 leading-relaxed text-white">
						Please leave your name, email, and a short message
					</p>
					<div className="relative mb-4">
						<label htmlFor="name" className="text-sm leading-7 text-white">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="email" className="text-sm leading-7 text-white">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="message" className="text-sm leading-7 text-white">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
							onChange={(e) => {
								setMessage(e.target.value);
							}}
						/>
					</div>
					<button
						type="submit"
						className="translate-y-1 rounded-xl border-0 bg-indigo-500 px-6 py-2 text-lg text-white transition-colors duration-300 ease-in-out hover:bg-indigo-600 focus:outline-none"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}
