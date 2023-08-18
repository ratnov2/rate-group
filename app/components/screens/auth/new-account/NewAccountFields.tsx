import { Stack } from '@mui/material'
import { FC } from 'react'
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form'

import { INewAccount } from '@/shared/types/auth.interface'

import Field from 'ui/form-ui/Field/Field'

interface INewVerifyFields {
	register: UseFormRegister<INewAccount>
	isPassRequired?: boolean
	errors: FieldErrors<INewAccount>
	watch: UseFormWatch<INewAccount>
}

const NewAccountFields: FC<INewVerifyFields> = ({
	errors,
	register,
	watch
}) => {
	return (
		<Stack>
			<Field
				{...register('password', {
					required: true,
					minLength: {
						value: 8,
						message: 'Password is not a valid'
					}
				})}
				type='password'
				error={errors.password?.message}
				textLabel='Придумайте пароль'
			/>
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
				error={errors.confirmPassword?.message}
				textLabel='Повторите пароль'
			/>
			<Field
				{...register('contract', {
					required: false
				})}
				type='string'
				error={errors.contract?.message}
				textLabel='Номер договора'
			/>
		</Stack>
	)
}

export default NewAccountFields
