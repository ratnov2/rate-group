import { Stack, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { setUser } from '@/store/auth/authSlice'

import { useAppDispatch } from '@/hooks/store.hook'

import { StepAuthorizationContext } from '../Auth'
import ButtonSubmit from 'ui/form-ui/button/Button'

import FullAuthFields from './FullAuthFields'
import { AuthService } from '@/services/auth/auth.service'

const FullAuth: FC = () => {
	const dispatch = useAppDispatch()
	const { mutate: mutateIsPhone } = useMutation(
		['login-register'],
		(data: IAuthFormData) => AuthService.login(data.phone, data.password),
		{
			onSuccess: data => dispatch(setUser(data.user))
		}
	)

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors, isValid }
	} = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		mutateIsPhone({ phone: data.phone, password: data.password })
	}

	return (
		<Stack>
			<Typography sx={{ marginBottom: 4 }}>
				Введите номер телефона для входа или регистрации
			</Typography>
			<FullAuthFields register={register} errors={errors} />
			<Typography>
				<Link href='/auth/check-phone'>Забыл пароль</Link>
			</Typography>
			<Stack sx={{ marginTop: 2 }}>
				<ButtonSubmit
					disabled={!isValid}
					onClick={handleSubmit(onSubmit)}
				>
					Send
				</ButtonSubmit>
			</Stack>
		</Stack>
	)
}

export default FullAuth
