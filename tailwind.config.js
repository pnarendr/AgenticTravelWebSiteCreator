/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Bodoni Moda"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
                cursive: ['"Pinyon Script"', 'cursive'],
            },
            colors: {
                gold: {
                    400: '#FACC15',
                    500: '#EAB308',
                    600: '#CA8A04',
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
