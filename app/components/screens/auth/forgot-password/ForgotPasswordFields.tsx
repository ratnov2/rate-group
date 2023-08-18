import { Stack } from '@mui/material'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { validatePhoneNumber } from '@/utils/validate-phone-number'

import Field from 'ui/form-ui/Field/Field'

interface IAuthFields {
	register: UseFormRegister<any>
	isPassRequired?: boolean
	errors: FieldErrors<any>
}

const ForgotPasswordFields: FC<IAuthFields> = ({
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
			/>
			<Stack sx={{ marginTop: 2 }}>
				<Field
					{...register('password', {
						required: true,
						minLength: {
							value: 8,
							message: 'Password is not a valid'
						}
					})}
					type='tel'
					textLabel='Введите пароль'
					error={errors?.password?.message}
				/>
			</Stack>
		</>
	)
}

export default ForgotPasswordFields
