import { OverrideFunction } from './mui.types'

export const svgIconOverrides: OverrideFunction<'MuiSvgIcon'> = (theme) => ({
  styleOverrides: {
    colorPrimary: {
      color: theme.palette.text.primary,
    },
    colorSecondary: {
      color: theme.palette.text.secondary,
    },
    colorAction: {
      color: theme.palette.primary.main,
    },
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(14),
    },
    fontSizeMedium: {
      fontSize: theme.typography.pxToRem(18),
    },
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(22),
    },
  },
})
