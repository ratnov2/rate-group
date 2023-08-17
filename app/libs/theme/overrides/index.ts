import type { Theme } from '@mui/material/styles'

import { cssBaselineOverride } from './CssBaseline'
import {
	helperTextOverrides,
	inputBaseOverrides,
	textFieldOverrides
} from './Input'
import { buttonOverrides } from './button'
import { svgIconOverrides } from './svgIcons'

export default function ComponentsOverrides(theme: Theme) {
	return Object.assign({
		MuiCssBaseline: cssBaselineOverride(theme),
		MuiInputBase: inputBaseOverrides(theme),
		MuiTextField: textFieldOverrides(theme),
		MuiFormHelperText: helperTextOverrides(theme),
		MuiButton: buttonOverrides(theme),
		MuiLoadingButton: buttonOverrides(theme),
		MuiSvgIcon: svgIconOverrides(theme)
	})
}
