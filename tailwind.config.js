// tailwind.config.js
module.exports = {

    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./utils/**/*.{js,ts,jsx,tsx}",

    ],
    important: true, // Add this to force specificity
    corePlugins: {
        transform: true, // Ensure transform utilities are enabled
        translate: true,
    },
    theme: {
        extend: {
            fontFamily: {
                iceland: ['Iceland', 'sans-serif'],
            },
            animation: {
                marquee: 'marquee 20s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        }
    },
    plugins: [],
}