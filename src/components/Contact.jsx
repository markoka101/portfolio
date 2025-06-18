import React from 'react';
import FormStatusModal from './modals/FormStatusModal';
import axios from 'axios';

import { Helmet } from 'react-helmet-async';

export default function Contact() {
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [message, setMessage] = React.useState('');
	const [modal, setModal] = React.useState({ open: false, title: '', message: '', type: '' });

	function encode(data) {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0) {
			setAllFields(true);
			setModal({
				open: true,
				title: 'Incomplete Form',
				message: 'Please fill out all fields before submitting.',
				type: 'warning'
			});
			return;
		}

		await axios
			.post('/', encode({ 'form-name': 'contact', name, email, message }), {
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
			.then(() => {
				setModal({
					open: true,
					title: 'Message Sent!',
					message: "Thank you for contacting me! I'll be in touch soon.",
					type: 'success'
				});
			})
			.catch((err) => {
				setModal({
					open: true,
					title: 'Something Went Wrong :(',
					message: 'There was an error sending your message. Please try again later.',
					type: 'error'
				});
				console.error(err);
			});
	};

	return (
		<>
			<Helmet>
				<title>Contact | Mark Oka Portfolio</title>
				<meta
					name="description"
					content="Contact Mark Oka, software engineer, for project inquiries, collaborations, or questions."
				/>
				<meta property="og:title" content="Contact | Mark Oka Portfolio" />
				<meta
					property="og:description"
					content="Get in touch with Mark Oka for web development projects or professional collaborations."
				/>
			</Helmet>
			<section id="contact" className="animate-fadeIn flex flex-col justify-center">
				<FormStatusModal
					open={modal.open}
					onClose={() => setModal({ ...modal, open: false })}
					title={modal.title}
					message={modal.message}
					type={modal.type}
				/>

				<div className="container mx-auto my-5 flex flex-wrap px-5 py-5 sm:my-16 sm:flex-nowrap sm:py-10 md:my-16 md:py-10 lg:py-10">
					<form
						netlify
						name="contact"
						onSubmit={handleSubmit}
						className="mt-8 flex w-full flex-col rounded-xl border-4 border-slate-500 bg-black bg-opacity-85 p-5 sm:mx-auto sm:mt-0 sm:w-[500px] sm:py-8 lg:w-[650px]"
					>
						<h2 className="title-font mb-1 text-3xl font-medium text-white sm:text-4xl">
							Contact Me
						</h2>
						<p className="mb-5 leading-relaxed text-white">
							Please leave your name, email, and a short message
						</p>
						<div className="relative mb-4">
							<input type="hidden" name="bot-field" />
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
								className="h-32 w-full rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
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
		</>
	);
}
