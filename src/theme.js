import { Theme } from 'theme-ui'

export const theme = {
	fonts: {
		body: "'DM Sans', sans-serif",
		heading: "'DM Sans', sans-serif",
	},
	fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
	fontWeights: {
		body: 'normal',
		heading: 500,
		bold: 700,
	},
	lineHeights: {
		body: 1.8,
		heading: 1.5,
	},
	letterSpacings: {
		body: 'normal',
		caps: '0.2em',
		heading: '-0.5px',
	},
	space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
	colors: {
		text: '#343D48', // body color and primary color
		text_secondary: '#02073E', // secondary body color
		heading: '#0F2137', // primary heading color
		heading_secondary: '#0F2137', // heading color
		background: '#FFFFFF', // body background color
		background_secondary: '#F9FBFD', // secondary background color
		border_color: '#E5ECF4', // border color
		yellow: '#FFA740', // border color
		primary: '#EA3A60', // primary button and link color
		secondary: '#2563FF', // secondary color - can be used for hover states
		muted: '#E4E4E4', // muted color
		accent: '#609', // a contrast color for emphasizing UI

		// highlight	a background color for highlighting text
		modes: {
			dark: {
				text: '#fff',
				background: '#000',
				primary: '#0cf',
				secondary: '#09c',
				muted: '#111',
			},
		},
	},
	breakpoints: ['480px', '768px', '1024px', '1220px', '1366px'],
	container: {
		maxWidth: ['100%', null, '1000px', '1200px', null, '1310px'],
	},
	buttons: {
		// default variant for MenuButton
		// you can reference other values defined in the theme
		defaultBtn: {
			borderRadius: '45px',
			fontSize: ['14px', null, null, 2],
			letterSpacings: '-0.15px',
			padding: ['12px 20px', null, '15px 30px'],
			fontFamily: 'body',
			cursor: 'pointer',
			lineHeight: 1.2,
			transition: 'all 0.25s',
			fontWeight: 500,
			'&:focus': {
				outline: 0,
			},
		},
		primary: {
			variant: 'buttons.defaultBtn',
			color: 'white',
			bg: 'primary',
			'&:hover': {
				boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
			},
		},
		secondary: {
			variant: 'buttons.defaultBtn',
			border: '2px solid',
			borderColor: 'primary',
			color: 'primary',
			bg: 'transparent',
			padding: ['10px 15px', null, '15px 30px'],
			'&:hover': {
				color: 'white',
				bg: 'primary',
			},
		},
	},
}
