/** @jsxImportSource theme-ui */
import { Flex, Box } from 'theme-ui'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

const Drawer = ({ showDrawer, toggleHandler }) => {
	return (
		<nav
			sx={styles.sideDrawer}
			className={`${showDrawer ? 'show-drawer' : 'hide'}`}
		>
			<Flex sx={{ flexDirection: 'row-reverse', p: 2 }}>
				<Box onClick={toggleHandler} sx={{ cursor: 'pointer' }}>
					<IoMdClose size='26px' />
				</Box>
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
}

export default Drawer
