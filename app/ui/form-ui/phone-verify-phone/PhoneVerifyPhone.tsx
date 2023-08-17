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
	width: 50,
	height: 50
}))
const StyledPhoneVerify = styled(Stack)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around'
}))
export default PhoneVerifyPhone
