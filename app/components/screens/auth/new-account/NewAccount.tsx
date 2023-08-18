import { Stack, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import {
	IAuthFormDataRegister,
	INewAccount,
	IVerifyCode
} from '@/shared/types/auth.interface'

import { useAppSelector } from '@/hooks/store.hook'

import ButtonSubmit from 'ui/form-ui/button/Button'

import NewAccountFields from './NewAccountFields'
import { AuthService } from '@/services/auth/auth.service'

const NewAccount: FC = () => {
	const phone = useAppSelector(state => state.auth.phone)
	const { mutate: mutateIsNewAccount } = useMutation(
		['register'],
		(data: IAuthFormDataRegister) =>
			AuthService.register(
				data.phone,
				data.password,
				String(data.contract)
			)
	)

	const {
		handleSubmit,
		reset,
		register,
		watch,
		formState: { errors, isValid }
	} = useForm<INewAccount>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<INewAccount> = data => {
		if (phone !== null)
			mutateIsNewAccount({
				phone: String(phone),
				password: data.password,
				contract: data.contract
			})
	}
	return (
		<>
			<Typography sx={{ marginBottom: 4 }}>
				Пожалуйста заполните ниже данные
			</Typography>
			<NewAccountFields
				errors={errors}
				register={register}
				watch={watch}
			/>
			<Stack sx={{ marginTop: 2 }}>
				<ButtonSubmit
					disabled={!isValid}
					onClick={handleSubmit(onSubmit)}
				>
					<Typography variant='h2'>Сохранить и войти</Typography>
				</ButtonSubmit>
			</Stack>
		</>
	)
}

export default NewAccount
