// import { Toaster } from 'react-hot-toast'
import { CssBaseline } from '@mui/material'
import {
	ThemeProvider as MUIThemeProvider,
	StyledEngineProvider,
	ThemeOptions,
	createTheme
} from '@mui/material/styles'
import { FC, ReactNode, useMemo } from 'react'

import { useSettings } from '../contexts'

import { softGradients } from './gradients'
import ComponentsOverrides from './overrides'
import { palette } from './palette'
import { softShadows, strongShadows } from './shadows'
import { breakpoints, typography } from './typography'

interface Props {
	children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }: Props) => {
	const { themeMode } = useSettings()
	const isLight = themeMode === 'light'

	const themeOptions: ThemeOptions = useMemo(
		() => ({
			palette: isLight ? palette.light : palette.dark,
			typography,
			breakpoints,
			shadows: isLight ? softShadows : strongShadows,
			// gradients: softGradients
		}),
		[isLight]
	)

	const theme = createTheme(themeOptions)
	theme.components = ComponentsOverrides(theme)

	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				{/* <Toaster
          toastOptions={{
            style: {
              borderRadius: 10,
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily,
            },
          }}
        /> */}
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
	)
}
