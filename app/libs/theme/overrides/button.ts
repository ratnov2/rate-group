import { OverrideFunction } from './mui.types'

export const buttonOverrides: OverrideFunction<'MuiButton'> = (theme) => ({
  styleOverrides: {
    root: {
      '&:disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
        color: theme.palette.text.disabled,
      },
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      '&:focus': {
        backgroundColor: theme.palette.primary.darker,
      },
    },
    containedSecondary: {
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
      '&:focus': {
        backgroundColor: theme.palette.secondary.darker,
      },
    },
    text: {
      '&:hover': {
        color: theme.palette.primary.light,
      },
    },
    containedSizeMedium: {
      padding: theme.spacing(1, 1.5),
    },
  },
  defaultProps: {
    variant: 'contained',
  },
})
