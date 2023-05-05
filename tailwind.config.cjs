/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
            },
            backgroundImage: {
                'header-image': "url('https://www.pakukuljetus.fi/wp-content/uploads/xpakukuljetus-tausta.jpg,qid=915.pagespeed.ic.brNg9ptsTD.webp')",
            }
        },
    },
    plugins: [],
}
