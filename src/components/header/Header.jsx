/** @jsxImportSource theme-ui */
import { jsx, Container, Flex, Button } from 'theme-ui'
import Img from '../../assets/logo.svg'
import menuItems from './header.data'
import { styles } from './headerStyles'

const Header = () => {
	return (
		<header sx={styles.header}>
			<Container sx={styles.container}>
				<img src={Img} alt='Logo' />
				<Flex as='nav' sx={styles.nav}>
					{menuItems.map((menuItem, index) => (
						<a
							href='#'
							key={index}
							sx={{ textDecoration: 'none', color: 'text' }}
						>
							{menuItem.label}
						</a>
					))}
				</Flex>
				<Button className='donate__btn' variant='secondary'>
					Get Started
				</Button>
			</Container>
		</header>
	)
}

export default Header
