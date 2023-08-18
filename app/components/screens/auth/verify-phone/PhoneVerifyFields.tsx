import { Stack, TextField, styled } from '@mui/material'
import { FC } from 'react'
import {
	Control,
	Controller,
	FieldErrors,
	UseFormRegister
} from 'react-hook-form'
import MaskedInput from 'react-input-mask'

import { IVerifyCode } from '@/shared/types/auth.interface'

import Field from 'ui/form-ui/Field/Field'

import { StyledPhoneVerify, StyledPhoneVerifyField } from './phone-verify.style'

interface IPhoneVerifyFields {
	register: UseFormRegister<IVerifyCode>
	isPassRequired?: boolean
	errors: FieldErrors<IVerifyCode>
	control: Control<IVerifyCode, any>
}

const PhoneVerifyFields: FC<IPhoneVerifyFields> = ({
	errors,
	register,
	control
}) => {
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
				error={errors.fourCode?.message}
				sharedStyle='square'
			/>
		</StyledPhoneVerify>
	)
}

export default PhoneVerifyFields
