import React from 'react'
import { Counter } from './features/counter/Counter'
import { darkTheme, lightTheme } from './theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useDispatch, useSelector } from 'react-redux'
import { dark, light } from './redux/modeSlice'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Button } from '@mui/material'
import { RootState } from './app/store'

function App() {
	const dispatch = useDispatch()
	const mode = useSelector((store: RootState) => {
		return store.mode.mode
	})

	return (
		<ThemeProvider theme={mode ? darkTheme : lightTheme}>
			<CssBaseline />
			<div className="App">
				<Counter />
				<div style={{ position: 'absolute', top: '0', right: '0' }}>
					<Button
						onClick={() =>
							mode ? dispatch(light()) : dispatch(dark())
						}
						size="small"
					>
						{mode ? <LightModeIcon /> : <DarkModeIcon />}
					</Button>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default App
