import { Stack, TextField, styled } from '@mui/material'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { IVerifyCode } from '@/shared/types/auth.interface'

import Field from 'ui/form-ui/Field/Field'

import { StyledPhoneVerify, StyledPhoneVerifyField } from './phone-verify.style'

interface IPhoneVerifyFields {
	register: UseFormRegister<IVerifyCode>
	isPassRequired?: boolean
	errors: FieldErrors<IVerifyCode>
}

const PhoneVerifyFields: FC<IPhoneVerifyFields> = ({ errors, register }) => {
	// const isNumber = (index: number, string: string) => {
	// 	console.log(string === ' ')

	// 	if (string === 'e') return ''
	// 	if (string.length > 1) return ''
	// 	console.log(string.length)

	// 	let number = Number(string)
	// 	if (number > 9) return ''
	// 	setCode(index, number)
	// }
	return (
		<StyledPhoneVerify>
			<Field
				{...register('oneCode', {
					required: true
				})}
				type='number'
				error={errors.oneCode?.message}
				sharedStyle='square'
			/>
			<Field
				{...register('twoCode', {
					required: true
				})}
				type='number'
				error={errors.twoCode?.message}
				sharedStyle='square'
			/>
			<Field
				{...register('threeCode', {
					required: true
				})}
				type='number'
				error={errors.threeCode?.message}
				sharedStyle='square'
			/>
			<Field
				{...register('fourCode', {
					required: true
				})}
				type='number'
				// textLabel='Введите пароль'
				error={errors.fourCode?.message}
				sharedStyle='square'
			/>
			{/* <StyledPhoneVerifyField
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
			/> */}
		</StyledPhoneVerify>
	)
}

export default PhoneVerifyFields
