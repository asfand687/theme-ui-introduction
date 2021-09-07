/** @jsxImportSource theme-ui */
import { Container, Flex, Button, Box, Heading } from 'theme-ui'
import Img from '../../assets/logo.svg'
import menuItems from './header.data'
import { styles } from './headerStyles'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import Drawer from 'rc-drawer'
import { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import MobileDrawer from './MobileDrawer'

const Header = () => {
	const [showDrawer, setShowDrawer] = useState(false)
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
				<MobileDrawer />
			</Container>
		</header>
	)
}

export default Header
