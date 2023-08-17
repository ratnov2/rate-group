import { OverrideFunction } from './mui.types'

export const cssBaselineOverride: OverrideFunction<'MuiCssBaseline'> = () => ({
  styleOverrides: {
    '*': {
      scrollbarWidth: 'thin',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    'html, body, #root': {
      minWidth: '300px',
      height: '100%',
      maxHeight: '100%',
    },
    html: {
      WebkitOverflowScrolling: 'touch',
    },
    '#root': {
      position: 'relative',
    },
    input: {
      '&[type=number]': {
        MozAppearance: 'textfield',
        '&::-webkit-outer-spin-button': {
          margin: 0,
          WebkitAppearance: 'none',
        },
        '&::-webkit-inner-spin-button': {
          margin: 0,
          WebkitAppearance: 'none',
        },
      },
    },
    img: {
      display: 'block',
      maxWidth: '100%',
    },
    // Scrollbar

    '*::-webkit-scrollbar': {
      width: '6px',
    },
    '*::-webkit-scrollbar-track': {
      background: '#adadad',
      borderRadius: '4px',
      width: '6px',
    },
    '*::-webkit-scrollbar-thumb': {
      background: '#616161',
      borderRadius: '4px',
    },
    '*::-webkit-scrollbar-thumb:hover': {
      background: '#3a3a3a',
    },
  },
})
