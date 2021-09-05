import { ThemeProvider } from 'theme-ui'
import Header from './components/header/Header'
import { theme } from './theme'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	)
}

export default App
