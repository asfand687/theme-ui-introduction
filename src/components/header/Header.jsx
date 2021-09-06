import { jsx, Container, Flex } from 'theme-ui'
import Img from '../../assets/logo.svg'
import menuItems from './header.data'

const Header = () => {
	const styles = {
		header: {
			color: 'text',
			fontWeight: 'body',
			py: 4,
			width: '100%',
			position: 'absolute',
			top: 0,
			left: 0,
			backgroundColor: 'transparent',
			transition: 'all 0.4s ease',
			'.donate__btn': {
				flexShrink: 0,
				mr: [15, 20, null, null, 0],
				ml: ['auto', null, null, null, 0],
			},
			'&.sticky': {
				position: 'fixed',
				backgroundColor: 'background',
				color: '#000000',
				boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
				py: 3,
				'nav > a': {
					color: 'text',
				},
			},
		},
		container: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		nav: {
			mx: 'auto',
			display: 'none',
			'@media screen and (min-width: 1024px)': {
				display: 'block',
			},
			a: {
				textDecoration: 'none',
				fontSize: 2,
				fontWeight: 'body',
				color: 'primary',
				px: 5,
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
	return (
		<header sx={styles.header}>
			<Container sx={styles.container}>
				<img src={Img} alt='Logo' />
				<Flex as='nav' sx={styles.nav}>
					{menuItems.map((menuItem, index) => (
						<a href='#' key={index}>
							{menuItem.label}
						</a>
					))}
				</Flex>
			</Container>
		</header>
	)
}

export default Header
