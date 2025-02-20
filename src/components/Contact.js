import React from "react";
import { Alert } from "flowbite-react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [allFields, setAllFields] = React.useState(false);
    const [sent, setSent] = React.useState(false);
    const [errBanner, setErrBanner] = React.useState(false);

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (
            name.trim().length === 0 ||
            email.trim().length === 0 ||
            message.trim().length === 0
        ) {
            setAllFields(true);
            return;
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
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

            <div className="container px-5 py-5 sm:py-10 md:py-10 lg:py-10 my-5 sm:my-16 md:my-16 lg:my-16 mx-auto flex sm:flex-nowrap flex-wrap">
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="lg:w-1/2 flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 p-5 border-slate-500 border-4 bg-black bg-opacity-85 rounded-xl"
                >
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <p className="text-white leading-relaxed mb-5">
                        Please leave your name, email, and a short message
                    </p>
                    <div className="relative mb-4">
                        <label
                            htmlFor="name"
                            className="leading-7 text-sm text-white"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="email"
                            className="leading-7 text-sm text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-white"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg transition-colors translate-y-1 duration-300 ease-in-out"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
