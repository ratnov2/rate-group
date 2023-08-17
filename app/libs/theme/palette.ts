import { common } from '@mui/material/colors'

declare module '@mui/material/styles/createPalette' {
	interface TypeBackground {
		lighter: string
		light: string
		neutral: string
		dark: string
		darker: string
	}

	interface PaletteColor {
		darker?: string
	}

	interface SimplePaletteColorOptions {
		darker?: string
	}
}

// SETUP COLORS
const PRIMARY = {
	light: '#768DBE',
	main: '#2C5CC5',
	dark: '#2954B2',
	darker: '#204188',
	auth: 'linear-gradient(180deg, #86EAD7 16.98%, rgba(0, 184, 223, 0.00) 100%)'
}
const SECONDARY = {
	main: '#E9EEF9',
	dark: '#E1E8F9',
	darker: '#D6DEF0'
}
const INFO = {
	light: '#4790C3',
	main: '#1E3E83',
	dark: '#23458F'
}
const SUCCESS = {
	light: '#AAF27F',
	main: '#34B978',
	dark: '#229A16'
}
const WARNING = {
	light: '#FFE16A',
	main: '#F2CE6D',
	dark: '#B78103'
}
const ERROR = {
	light: '#FF7171',
	main: '#DB3156',
	dark: '#B72136'
}

const GREY = {
	0: '#F6F6F6',
	100: '#E5E7EB',
	200: '#DCE1E6',
	300: '#B0B0B0',
	400: '#8E8E8E',
	500: '#2E3540'
}

const GRADIENT = {
	auth: 'linear-gradient(180deg, #86EAD7 16.98%, rgba(0, 184, 223, 0.00) 100%)'
}

const COMMON = {
	common: { black: '#000', white: '#fff' },
	primary: { ...PRIMARY, contrastText: '#fff' },
	secondary: { ...SECONDARY, contrastText: PRIMARY.main },
	info: { ...INFO, contrastText: '#fff' },
	success: { ...SUCCESS, contrastText: GREY[500] },
	warning: { ...WARNING, contrastText: GREY[500] },
	error: { ...ERROR, contrastText: '#fff' },
	grey: GREY,
	action: {
		hover: GREY[100],
		selected: GREY[400],
		disabled: GREY[300],
		disabledBackground: GREY[300],
		focus: GREY[200],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48
	}
}

export const palette = {
	light: {
		...COMMON,
		mode: 'light',
		text: {
			primary: GREY[500],
			secondary: GREY[400],
			disabled: common.white
		},
		background: {
			default: common.white,
			lighter: GREY[0],
			light: GREY[100],
			paper: GREY[200],
			neutral: GREY[300],
			dark: GREY[400],
			darker: GREY[500]
		},
		action: { active: PRIMARY.light, ...COMMON.action },
		divider: GREY[200]
	},
	dark: {
		...COMMON,
		mode: 'dark',
		text: {
			primary: common.white,
			secondary: GREY[400],
			disabled: GREY[200]
		},
		background: {
			default: common.black,
			paper: PRIMARY.main,
			neutral: GREY[400],
			dark: GREY[300],
			darker: GREY[200]
		},
		action: { active: PRIMARY.dark, ...COMMON.action },
		divider: common.white
	}
} as const
