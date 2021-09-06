/** @jsxImportSource theme-ui */
import { jsx, Container, Flex } from 'theme-ui'
import Img from '../../assets/logo.svg'
import menuItems from './header.data'

const Header = () => {
	return (
		<header sx={{ py: '3' }}>
			<Container>
				<img src={Img} alt='Logo' />
				<Flex as='nav'>
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
			</Container>
		</header>
	)
}

export default Header
