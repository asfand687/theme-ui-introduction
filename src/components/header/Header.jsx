/** @jsxImportSource theme-ui */
import { Container, Flex, Button, Box, Heading } from 'theme-ui'
import Img from '../../assets/logo.svg'
import menuItems from './header.data'
import { styles } from './headerStyles'
import { IoMdMenu } from 'react-icons/io'
import Drawer from '../Drawer'
import Scrollbars from 'react-custom-scrollbars'

const Header = ({ toggleHandler, showDrawer }) => {
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
				<Flex sx={styles.navRight}>
					<Button className='donate__btn' variant='secondary'>
						Get Started
					</Button>
					<Box sx={styles.icon} onClick={toggleHandler}>
						<IoMdMenu size='26px' />
					</Box>
				</Flex>
				<Drawer showDrawer={showDrawer} toggleHandler={toggleHandler} />
			</Container>
		</header>
	)
}

export default Header
