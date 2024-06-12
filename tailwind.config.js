const flowbite = require("flowbite-react/tailwind");
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
        flowbite.content(),
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            transitionProperty: {
                height: "height",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [flowbite.plugin()],
};
