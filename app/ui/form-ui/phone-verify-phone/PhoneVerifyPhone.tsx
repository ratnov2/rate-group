import { Stack, TextField, styled } from '@mui/material'
import { FC } from 'react'

interface IPhoneVerifyNumber {
	code: number[]
	setCode: (index: number, number: number) => void
}

const PhoneVerifyPhone: FC<IPhoneVerifyNumber> = ({ code, setCode }) => {
	const isNumber = (index: number, string: string) => {
		console.log(string === ' ')

		if (string === 'e') return ''
		if (string.length > 1) return ''
		console.log(string.length)

		let number = Number(string)
		if (number > 9) return ''
		setCode(index, number)
	}
	return (
		<StyledPhoneVerify>
			<StyledPhoneVerifyField
				type='number'
				value={code[0]}
				onChange={e => isNumber(0, e.currentTarget.value)}
			/>
			<StyledPhoneVerifyField
				type='number'
				onChange={e => setCode(1, Number(e.currentTarget.value))}
			/>
			<StyledPhoneVerifyField
				type='number'
				onChange={e => setCode(2, Number(e.currentTarget.value))}
			/>
			<StyledPhoneVerifyField
				type='number'
				onChange={e => setCode(3, Number(e.currentTarget.value))}
			/>
		</StyledPhoneVerify>
	)
}

const StyledPhoneVerifyField = styled(TextField)(({ theme }) => ({
	padding: 5,
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
		padding: 5,
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
		borderRadius: 10,
		height: '100%',
		border: 'none',
		fontSize: '40px',
		textAlign: 'center'
	},
	'& fieldset': {
		border: 'none'
	}
}))
const StyledPhoneVerify = styled(Stack)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around'
}))
export default PhoneVerifyPhone
