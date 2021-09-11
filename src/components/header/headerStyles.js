export const styles = {
	header: {
		color: 'text',
		fontWeight: 'body',
		py: 4,
		fontFamily: 'body',
		width: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: 'transparent',
		transition: 'all 0.3s ease-in',

		'&.sticky': {
			position: 'fixed',
			backgroundColor: 'background',
			color: '#000000',
			boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
			py: 3,
			'nav > a': {
				color: 'text',
				'&.active': {
					color: 'text_secondary',
				},
			},
		},
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		px: [4, null, 5],
	},
	nav: {
		display: ['none', 'none', 'block'],
		a: {
			fontSize: 2,
			fontWeight: 'body',
			px: 4,
			cursor: 'pointer',
			lineHeight: '1.2',
			transition: 'all 0.15s',
			'&:hover': {
				color: 'primary',
			},
			'&.active': {
				color: 'primary',
			},
		},
	},
	link: {
		width: '100%',
		p: 2,
	},
	icon: {
		display: ['block', 'block', 'none'],
		mx: 3,
		cursor: 'pointer',
	},
	navRight: {
		alignItems: 'center',
	},
	navLinks: {
		textDecoration: 'none',
		color: 'text',
	},
}
