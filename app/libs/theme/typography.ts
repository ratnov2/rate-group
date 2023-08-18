import { TypographyOptions } from '@mui/material/styles/createTypography'

function pxToRem(value: number) {
	return `${value / 16}rem`
}

function responsiveFontSizes({
	sm,
	md,
	lg
}: {
	sm: number
	md: number
	lg: number
}) {
	return {
		'@media (min-width:600px)': {
			fontSize: pxToRem(sm)
		},
		'@media (min-width:900px)': {
			fontSize: pxToRem(md)
		},
		'@media (min-width:1292px)': {
			fontSize: pxToRem(lg)
		}
	}
}

export const breakpoints = {
	values: {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1292,
		xl: 1536
	}
}

export const typography: TypographyOptions = {
	fontFamily: 'Inter, sans-serif',
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
	fontWeightBold: 600,

	h1: {
		fontWeight: 700,
		lineHeight: 'normal',
		fontSize: pxToRem(40),
		...responsiveFontSizes({ sm: 24, md: 24, lg: 24 })
	},
	h2: {
		fontWeight: 600,
		lineHeight: 'normal',
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 22, md: 22, lg: 22 })
	},
	h3: {
		fontWeight: 400,
		lineHeight: 'normal',
		fontSize: pxToRem(20),
		...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
	},
	h4: {
		fontWeight: 500,
		lineHeight: 18 / 15,
		fontSize: pxToRem(15),
		...responsiveFontSizes({ sm: 15, md: 15, lg: 15 })
	},
	h5: {
		fontWeight: 500,
		lineHeight: 17 / 14,
		fontSize: pxToRem(14),
		...responsiveFontSizes({ sm: 14, md: 14, lg: 14 })
	},
	h6: {
		fontWeight: 400,
		lineHeight: 15 / 12,
		fontSize: pxToRem(12),
		...responsiveFontSizes({ sm: 12, md: 12, lg: 12 })
	},
	subtitle1: {
		fontWeight: 300,
		lineHeight: 'normal',
		fontSize: pxToRem(15)
	},
	subtitle2: {
		fontWeight: 500,
		lineHeight: 17 / 14,
		fontSize: pxToRem(14)
	},
	body1: {
		fontWeight: 400,
		lineHeight: 17 / 14,
		fontSize: pxToRem(14),
		...responsiveFontSizes({ sm: 14, md: 14, lg: 14 })
	},
	body2: {
		fontWeight: 400,
		lineHeight: 15 / 12,
		fontSize: pxToRem(12)
	},
	caption: {
		fontWeight: 300,
		lineHeight: 22 / 14,
		fontSize: pxToRem(14)
	},
	overline: {
		fontWeight: 700,
		lineHeight: 1.5,
		fontSize: pxToRem(12),
		letterSpacing: 1.1,
		textTransform: 'uppercase'
	},
	button: {
		textTransform: 'none',
		fontWeight: 400,
		lineHeight: 1.5,
		fontSize: pxToRem(14)
	}
} as const
