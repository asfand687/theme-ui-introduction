import { Box } from '@theme-ui/components'
import Drawer from 'rc-drawer'
import { useState, useEffect } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link } from 'react-scroll'
import menuItems from './header.data'

export default function MobileDrawer({ toggleIcon }) {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const toggleHandler = () => {
		setShowNav(false)
		setIsDrawerOpen((prev) => !prev)
	}
	const [showNav, setShowNav] = useState(false)

	return (
		<>
			<section
				style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					top: '0',
					left: '0',
					backgroundColor: 'rgba(0,0,0,0.3)',
					zIndex: '2000',
					transition: 'all 0.5s ease-in',
				}}
			>
				<nav
					style={{
						position: 'fixed',
						transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
						width: '320px',
						height: '100%',
						background: '#f4f4f4',
						zIndex: '2100',
						transition: 'all 1s ease-in-out 0.5s',
					}}
				>
					<div onClick={toggleHandler}>
						<IoMdClose size='26px' />
					</div>
				</nav>
			</section>
			<div onClick={toggleHandler} sx={styles.handler}>
				{toggleIcon}
			</div>
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
