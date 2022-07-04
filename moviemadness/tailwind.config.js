/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: '#071E22',
				primary: '#EE2E31',
				secondary: {
					100: '#56445D',
					200: '#CFCFEA',
				}
			},
			fontFamily: {
				body: ["Poppins", "sans-serif"],
			},
			fontSize: {
				massive: '4rem'
			},
		},
	},
	plugins: [],
};
