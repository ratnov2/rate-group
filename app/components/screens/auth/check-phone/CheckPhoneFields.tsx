// import Field from 'ui/form-ui/Field/Field'
import { InputMaskElement } from 'imask/esm/index'
import dynamic from 'next/dynamic'
import { FC, createRef, useEffect, useRef, useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { IMask, IMaskInput } from 'react-imask'

import { IAuthFormData, IAuthPhone } from '@/shared/types/auth.interface'

import { NumberMask } from '@/utils/auth-mask/auth-mask'
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
	errors
}) => {
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
				// typeMask={NumberMask}
			/>
		</>
	)
}

export default CheckPhoneFields
