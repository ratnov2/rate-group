// import Field from 'ui/form-ui/Field/Field'
import { InputMaskElement } from 'imask/esm/index'
import dynamic from 'next/dynamic'
import { FC, createRef, useEffect, useRef, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IMask, IMaskInput } from 'react-imask'

import { IAuthFormData, IAuthPhone } from '@/shared/types/auth.interface'

import { pattern, validatePhoneNumber } from '@/utils/validate-phone-number'

import Field from 'ui/form-ui/Field/Field'

interface IAuthFields {
	register: UseFormRegister<IAuthPhone>
	isPassRequired?: boolean
	errors: FieldErrors<IAuthPhone>
	phoneText: string
	handlerText: (phone: string) => void
}

// const Dy = dynamic(() => import('ui/form-ui/Field/Field'), { ssr: false })

const CheckPhoneFields: FC<IAuthFields> = ({
	register,
	isPassRequired,
	errors,
	handlerText,
	phoneText
}) => {

	// useEffect(() => {
	// 	if (ref) {
	// 		const mask = IMask(ref as unknown as InputMaskElement, maskOptions)
	// 	}
	// }, [])
	// `numberPipe` is just a function, call it to format values
	// "1,00"

	// if `numberPipe` will not be reused, then just use `IMask.pipe` inplace:
	// IMask.pipe('1', {
	// 	mask: Number,
	// 	scale: 2,
	// 	thousandsSeparator: ' ',
	// 	normalizeZeros: true,
	// 	padFractionalZeros: true
	// })

	return (
		<>
			<Field
				{...register('phone', {
					required: true,
					pattern: {
						value: validatePhoneNumber,
						message: 'This number is not a valid'
					}
				})}
				type='tel'
				textLabel='Номер телефона'
				error={errors.phone?.message}
				// value={phoneText}
				// onChange={e => handlerText(String(e.currentTarget.value))}
			/>
		</>
	)
}

export default CheckPhoneFields
