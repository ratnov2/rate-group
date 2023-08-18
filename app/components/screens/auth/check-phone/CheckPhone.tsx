import { Stack, Typography, styled } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthPhone } from '@/shared/types/auth.interface'

import { setPhone } from '@/store/auth/authSlice'

import { useAppDispatch } from '@/hooks/store.hook'

import { StepAuthorizationContext } from '../Auth'
import ButtonSubmit from 'ui/form-ui/button/Button'

import PhoneField from './CheckPhoneFields'
import { AuthService } from '@/services/auth/auth.service'

// const dy = dynamic(()=>import(''))

const CheckPhone: FC = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	const { stepAuth, HandlerSetStepAuth } = useContext(
		StepAuthorizationContext
	)
	const [phoneText, setPhoneText] = useState('')

	const handlerPhoneText = (phone: string) => {
		setPhoneText(phone)
	}

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors, isValid }
	} = useForm<IAuthPhone>({
		mode: 'onChange'
	})

	const { mutate: mutateIsPhone } = useMutation(
		['get-is-num'],
		(phone: string) => AuthService.checkPhone(phone),
		{
			onSuccess: data => {
				if (data) {
					router.push('/auth/login')
				} else {
					router.push('/auth/verify-phone')
				}
			}
		}
	)
	const onSubmit: SubmitHandler<IAuthPhone> = data => {
		dispatch(setPhone(data.phone))
		mutateIsPhone(data.phone)
	}

	return (
		<Stack>
			<Typography sx={{ marginBottom: 4 }}>
				Введите номер телефона для входа или регистрации
			</Typography>
			<PhoneField
				register={register}
				errors={errors}
				phoneText={phoneText}
				handlerText={handlerPhoneText}
			/>
			<Stack sx={{ marginTop: 4 }}>
				<ButtonSubmit
					disabled={!isValid}
					onClick={handleSubmit(onSubmit)}
				>
					Далее
				</ButtonSubmit>
			</Stack>
			<StyledStackOrElement>
				<StyledStackOrElementShare>
					<Typography>или</Typography>
				</StyledStackOrElementShare>
			</StyledStackOrElement>
		</Stack>
	)
}

const StyledStackOrElement = styled(Stack)(({ theme }) => ({
	textAlign: 'center',
	marginTop: theme.spacing(4),

	position: 'relative',
	width: '100%',
	'&::before ': {
		content: '""',
		backgroundColor: theme.palette.grey[200],
		position: 'absolute',
		width: '100%',
		height: 2,
		top: 8,
		zIndex: -1
	}
}))
const StyledStackOrElementShare = styled(Stack)(({ theme }) => ({
	width: 'fit-content',
	margin: 'auto',
	backgroundColor: 'white',
	padding: theme.spacing(0, 1, 0, 1)
}))
export default CheckPhone
