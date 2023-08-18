import { Stack, TextField, styled } from '@mui/material'

export const StyledPhoneVerifyField = styled(TextField)(({ theme }) => ({
	padding: 1,
	display: 'inline-block',
	margin: '75px 0',
	position: 'relative',
	border: 'none',
	zIndex: 0,
	width: 80,
	height: 80,
	'&::before': {
		content: '""',
		position: 'absolute',
		zIndex: -1,
		inset: 0,
		padding: 1,
		borderRadius: 10,
		background: 'linear-gradient(to bottom, #86EAD7, #34ACE0)',
		mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
		maskComposite: 'exclude'
	},
	'&  div': {
		border: 'none',
		height: '100%',
		padding: '7px 0',
		borderRadius: 5
	},
	'& input': {
		cursor: 'pointer',
		background: 'white',
		borderRadius: 5,
		height: '100%',
		border: 'none',
		fontSize: '40px',
		textAlign: 'center'
	},
	'& fieldset': {
		border: 'none'
	}
}))

export const StyledPhoneVerify = styled(Stack)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around'
}))
