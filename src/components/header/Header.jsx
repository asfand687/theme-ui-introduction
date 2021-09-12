/** @jsxImportSource theme-ui */
import { Container, Flex, Button, Box } from 'theme-ui'
import Img from '../../assets/logo.svg'
import menuItems from './header.data'
import { styles } from './headerStyles'
import { IoMdMenu } from 'react-icons/io'
import { Link } from 'react-scroll'

const Header = ({ toggleHandler, showDrawer, className }) => {
	return (
		<header className={`${className}`} sx={styles.header}>
			<Container sx={styles.container}>
				<img src={Img} alt='Logo' />
				<Flex as='nav' sx={styles.nav}>
					{menuItems.map((menuItem, index) => (
						<Link
							to={`${menuItem.path}`}
							activeClass='active'
							key={index}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							sx={styles.navLinks}
						>
							{menuItem.label}
						</Link>
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
			</Container>
		</header>
	)
}

export default Header
