import { useState } from 'react'
import Backdrop from './components/Backdrop'
import Header from './components/header/Header'
import Banner from './sections/Banner'
import './index.css'
function App() {
	const [showDrawer, setShowDrawer] = useState(false)
	return (
		<main
			style={{
				minHeight: '100vh',
				width: '100%',
			}}
		>
			<Header
				showDrawer={showDrawer}
				toggleHandler={() => setShowDrawer((prev) => !prev)}
			/>
			<Backdrop
				showBackdrop={showDrawer}
				toggleHandler={() => setShowDrawer((prev) => !prev)}
			/>
			<Banner />
		</main>
	)
}

export default App
