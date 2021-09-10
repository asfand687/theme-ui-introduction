import { useState } from 'react'
import Backdrop from './components/Backdrop'
import Header from './components/header/Header'
import Banner from './sections/Banner'
import Sticky from 'react-stickynode'
import './index.css'
function App() {
	const [showDrawer, setShowDrawer] = useState(false)
	const styles = {
		global: { minHeight: '100vh', width: '100%' },
	}
	const [isSticky, setIsSticky] = useState(false)
	const handleStateChange = (status) => {
		if (status.status === Sticky.STATUS_FIXED) {
			setIsSticky(true)
		} else if (status.status === Sticky.STATUS_ORIGINAL) {
			setIsSticky(false)
		}
	}
	return (
		<main sx={styles.global}>
			<Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
				<Header
					className={`${isSticky ? 'sticky' : 'unSticky'}`}
					showDrawer={showDrawer}
					toggleHandler={() => setShowDrawer((prev) => !prev)}
				/>
				<Backdrop
					showBackdrop={showDrawer}
					toggleHandler={() => setShowDrawer((prev) => !prev)}
				/>
			</Sticky>
			<Banner />
		</main>
	)
}

export default App
