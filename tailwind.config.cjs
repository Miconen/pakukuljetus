/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
}
