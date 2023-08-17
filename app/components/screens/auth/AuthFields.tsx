import { FC } from 'react'
import { Control, RegisterOptions, UseFormRegister } from 'react-hook-form'

import { validEmail } from '@/shared/reges'
import { IAuthFormData } from '@/shared/types/auth.interface'

import Field from 'ui/form-ui/Field/Field'

interface IAuthFields {
	register: UseFormRegister<IAuthFormData>
	isPassRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ register, isPassRequired }) => {
	return (
		<>
			<Field
				{...register('phone', {
					required: true
					//   pattern:{
					// 	value :,
					// 	message:'This email is not a valid'
					//   }
				})}
				type='password'
				textLabel='Password'
			/>
			<Field
				{...register('password', {
					required: true,
					minLength: {
						value: 8,
						message: 'Your password less 9 characters'
					}
				})}
				type='password'
				textLabel='Password'
			/>
		</>
	)
}

export default AuthFields
