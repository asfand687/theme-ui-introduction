/** @jsxImportSource theme-ui */
import { Flex, Box } from 'theme-ui'
import { IoMdClose } from 'react-icons/io'
import menuItems from './header/header.data'

const Drawer = ({ showDrawer, toggleHandler }) => {
	return (
		<nav
			sx={styles.sideDrawer}
			className={`${showDrawer ? 'show-drawer' : 'hide'}`}
		>
			<Flex
				sx={{
					flexDirection: 'column',
					justifyContent: 'space-between',
					width: '100%',
					height: '90%',
				}}
			>
				<Box>
					<Flex
						sx={{
							display: 'flex',
							flexDirection: 'row-reverse',
							padding: '2rem',
						}}
					>
						<Box onClick={toggleHandler} sx={{ cursor: 'pointer' }}>
							<IoMdClose size='26px' />
						</Box>
					</Flex>
					<Box sx={{ p: '3rem' }}>
						<ul sx={styles.list}>
							{menuItems.map((item) => (
								<li>
									<a href={`${item.path}`}>{item.label}</a>
								</li>
							))}
						</ul>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>Social</Box>
			</Flex>
		</nav>
	)
}

const styles = {
	sideDrawer: {
		height: '100%',
		background: '#fff',
		boxShadow: '1px 0px 7px rgba(0, 0, 0, 0.5)',
		position: 'fixed',
		top: '0',
		left: '0',
		width: '350px',
		zIndex: '2000',
		transition: 'all 0.4s ease-in-out',
	},
	list: {
		listStyle: 'none',
		p: '0px',
		a: {
			textDecoration: 'none',
			color: '#333',
			textTransform: 'uppercase',
		},
		li: {
			borderBottom: '1px solid #333',
			pb: 5,
			mb: 4,
		},
	},
}

export default Drawer
