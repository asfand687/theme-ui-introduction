import { Box } from '@theme-ui/components'
import Drawer from 'rc-drawer'
import { useState } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link } from 'react-scroll'
import menuItems from './header.data'

export default function MobileDrawer() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const toggleHandler = () => {
		setIsDrawerOpen((prev) => !prev)
	}
	return (
		<>
			<Drawer
				width='320px'
				className='drawer'
				handler={false}
				open={isDrawerOpen}
				onClose={toggleHandler}
			>
				<Box as='div' onClick={toggleHandler} sx={styles.close}>
					<IoMdClose size='24px' color='#000000' />
				</Box>
				<Box sx={styles.drawer}>
					<Scrollbars autoHide>
						<Box sx={styles.content}>
							<Box sx={styles.menu}>
								{menuItems.map((menuItem, index) => (
									<div>{menuItem.label}</div>
								))}
							</Box>
						</Box>
					</Scrollbars>
				</Box>
			</Drawer>
			<Box
				className='drawer__handler'
				style={{ display: 'inline-block' }}
				onClick={toggleHandler}
			>
				<Box sx={styles.handler}>
					<IoMdMenu size='26px' />
				</Box>
			</Box>
		</>
	)
}

const styles = {
	handler: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexShrink: '0',
		width: '26px',

		'@media screen and (min-width: 1024px)': {
			display: 'none',
		},
	},
	close: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: '25px',
		right: '30px',
		zIndex: '1',
		cursor: 'pointer',
	},
	drawer: {
		width: '100%',
		height: '100%',
	},
	content: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		pt: '100px',
		pb: '40px',
		px: '30px',
	},
	menu: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		a: {
			fontSize: '16px',
			fontWeight: '500',
			color: 'text_white',
			py: '15px',
			cursor: 'pointer',
			borderBottom: '1px solid #e8e5e5',
			transition: 'all 0.25s',
			'&:hover': {
				color: 'secondary',
			},
			'&.active': {
				color: 'secondary',
			},
		},
	},
}
