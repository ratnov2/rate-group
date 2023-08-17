import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

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

const PhoneField: FC<IAuthFields> = ({
	register,
	isPassRequired,
	errors,
	handlerText,
	phoneText
}) => {
	return (
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
			error={errors?.phone?.message}
			value={phoneText}
			//.replace(pattern, '+7 ($2) $3-$4-$5')
			onChange={e => handlerText(e.currentTarget.value)}
		/>
	)
}

export default PhoneField
