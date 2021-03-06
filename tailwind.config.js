module.exports = {
	content: ['src/**/*.{vue,ts}', 'index.html', 'vite.config.{js,ts}'],
	// darkMode: false, // or 'media' or 'class'
	theme: {
		fontMetrics: {
			sans: {
				capHeight: 2048,
				ascent: 2728,
				descent: -680,
				lineGap: 0,
				unitsPerEm: 2816,
			},
			marker: {
				capHeight: 758,
				ascent: 1136,
				descent: -325,
				lineGap: 31,
				unitsPerEm: 1024,
			},
			amatic: {
				capHeight: 754,
				ascent: 1016,
				descent: -245,
				lineGap: 0,
				unitsPerEm: 1000,
			},
		},

		extend: {
			colors: {
				grey: {
					100: '#f1f2f2',
					200: '#e7ebed',
					300: '#dee4e8',
					400: '#c0c8cd',
					500: '#949ca1',
					600: '#62696d',
					700: '#393e41',
					800: '#202326',
					900: '#16191b',
				},
			},
			fontFamily: {
				sans: 'Inter, sans-serif',
				marker: 'Permanent Marker, sans-serif',
				amatic: 'Amatic SC, sans-serif',
			},
			boxShadow: {
				'inset-white': 'inset 0 0 0 2px #fff',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-capsize')({ className: 'leading-trim' }),
		require('tailwindcss-opentype'),
	],
}
