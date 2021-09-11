/** @jsxImportSource theme-ui */

const Backdrop = ({ showBackdrop, toggleHandler }) => {
	return showBackdrop ? (
		<div onClick={toggleHandler} sx={styles.backdrop}></div>
	) : null
}

const styles = {
	backdrop: {
		position: 'fixed',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		zIndex: '4005',
		background: 'rgba(0, 0, 0, 0.3)',
	},
}

export default Backdrop
