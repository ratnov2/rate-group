import { Stack, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { StepAuthorizationContext } from '../Auth'
import ButtonSubmit from 'ui/form-ui/button/Button'

import FullAuthFields from './FullAuthFields'
import { AuthService } from '@/services/auth/auth.service'

const FullAuth: FC = () => {
	const { stepAuth } = useContext(StepAuthorizationContext)
	const { mutate: mutateIsPhone } = useMutation(
		['login-register'],
		(phone: string) => AuthService.checkPhone(phone)
	)

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors }
	} = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		if (stepAuth) mutateIsPhone(data.phone)
	}

	return (
		<Stack>
			<Typography sx={{ marginBottom: 4 }}>
				Введите номер телефона для входа или регистрации
			</Typography>
			<FullAuthFields register={register} errors={errors} />
			<Typography>
				<Link href='/auth/forgot-password'>Забыл пароль</Link>
			</Typography>
			<Stack sx={{ marginTop: 2 }}>
				<ButtonSubmit onClick={handleSubmit(onSubmit)}>
					Send
				</ButtonSubmit>
			</Stack>
		</Stack>
	)
}

export default FullAuth
