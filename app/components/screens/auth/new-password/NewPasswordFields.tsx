import { Stack } from '@mui/material'
import { FC } from 'react'
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form'

import {
	IAuthFormData,
	IAuthPhone,
	IPasswordConfirm
} from '@/shared/types/auth.interface'

import { validatePhoneNumber } from '@/utils/validate-phone-number'

import Field from 'ui/form-ui/Field/Field'

interface IAuthFields {
	register: UseFormRegister<IPasswordConfirm>
	isPassRequired?: boolean
	errors: FieldErrors<IPasswordConfirm>
	watch: UseFormWatch<IPasswordConfirm>
}

const NewPasswordFields: FC<IAuthFields> = ({
	register,
	isPassRequired,
	errors,
	watch
}) => {
	return (
		<>
			<Field
				{...register('password', {
					required: true,
					pattern: {
						value: validatePhoneNumber,
						message: 'This password is not a valid'
					}
				})}
				type='tel'
				textLabel='Введите пароль'
				error={errors?.password?.message}
			/>
			<Stack sx={{ marginTop: 2 }}>
				<Field
					{...register('confirmPassword', {
						required: true,
						minLength: {
							value: 8,
							message: 'Password is not a valid'
						},
						validate: (val: string) => {
							if (watch('password') != val) {
								return 'Your passwords do no match'
							}
						}
					})}
					type='password'
					textLabel='Введите пароль'
					error={errors.confirmPassword?.message}
				/>
			</Stack>
		</>
	)
}

export default NewPasswordFields
