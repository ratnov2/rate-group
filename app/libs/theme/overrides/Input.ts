import { OverrideFunction } from './mui.types'

export const inputBaseOverrides: OverrideFunction<'MuiInputBase'> = theme => {
	const isLight = theme.palette.mode === 'light'

	return {
		styleOverrides: {
			input: {
				...(isLight && {
					'&::placeholder': {
						opacity: 0.5,
						color: theme.palette.text.primary
					}
				})
			}
		}
	}
}

export const textFieldOverrides: OverrideFunction<'MuiTextField'> = () => ({
	defaultProps: {
		variant: 'outlined',
		size: 'small'
	}
})

export const helperTextOverrides: OverrideFunction<
	'MuiFormHelperText'
> = theme => ({
	styleOverrides: {
		root: {
			fontSize: theme.typography.pxToRem(12),
			margin: 0,
			textAlign: 'right',
			backgroundColor: theme.palette.background.default
		}
	}
})
