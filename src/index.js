/** @jsxImportSource theme-ui */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'theme-ui'

import { theme } from './theme'

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
)
