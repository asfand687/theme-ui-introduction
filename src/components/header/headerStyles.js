export const styles = {
	header: {
		color: 'text',
		fontWeight: 'bold',
		py: 4,
		fontFamily: 'body',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		px: [4, null, 5],
	},
	nav: {
		display: ['none', null, 'block'],
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
}
