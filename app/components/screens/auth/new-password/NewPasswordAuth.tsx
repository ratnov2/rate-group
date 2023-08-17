import { Stack, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthFormData, IPasswordConfirm } from '@/shared/types/auth.interface'

import AuthLayout from '../auth-layout/AuthLayout'
import ButtonSubmit from 'ui/form-ui/button/Button'

import NewPasswordFields from './NewPasswordFields'
import { AuthService } from '@/services/auth/auth.service'

const NewPasswordAuth: FC = () => {
	const { mutate: mutateIsPhone } = useMutation(
		['login-register'],
		(phone: string) => AuthService.checkPhone(phone)
	)

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
		watch
	} = useForm<IPasswordConfirm>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IPasswordConfirm> = data => {
		console.log('confirm', data)
	}

	return (
		<AuthLayout>
			<Typography sx={{ marginBottom: 4 }}>
				Введите номер телефона для входа или регистрации
			</Typography>
			<NewPasswordFields
				errors={errors}
				register={register}
				watch={watch}
			/>
			<Stack sx={{ marginTop: 2 }}>
				<ButtonSubmit
					// disabled={
					// 	!!errors.confirmPassword?.message ||
					// 	!!errors.password?.message
					// }
          disabled={true}
					onClick={handleSubmit(onSubmit)}
				>
					Сохранить и войти
				</ButtonSubmit>
			</Stack>
		</AuthLayout>
	)
}

export default NewPasswordAuth
