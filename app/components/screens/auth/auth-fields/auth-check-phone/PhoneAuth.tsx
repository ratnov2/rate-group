import { Button, Stack, Typography, styled } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { FC, useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthPhone } from '@/shared/types/auth.interface'

import { pattern } from '@/utils/validate-phone-number'

import { StepAuthorizationContext } from '../../Auth'
import ButtonSubmit from 'ui/form-ui/button/Button'

import PhoneField from './PhoneField'
import { AuthService } from '@/services/auth/auth.service'

const PhoneAuth: FC = () => {
	const { stepAuth, HandlerSetStepAuth } = useContext(
		StepAuthorizationContext
	)

	const [phoneText, setPhoneText] = useState('')

	const handlerPhoneText = (phone: string) => {
		setPhoneText(phone)
	}

	const { mutate: mutateIsPhone } = useMutation(
		['get-is-num'],
		(phone: string) => AuthService.checkPhone(phone),
		{
			onSuccess: data => {
				HandlerSetStepAuth({ isPhone: true, isFalsePhone: data })
			}
		}
	)

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors }
	} = useForm<IAuthPhone>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthPhone> = data => {
		console.log(data.phone.replace(pattern, '+7 ($2) $3-$4-$5'))
		mutateIsPhone(data.phone)
	}

	return (
		<Stack>
			<Typography sx={{ marginBottom: 4 }}>
				Введите номер телефона для входа или регистрации
			</Typography>
			<PhoneField register={register} errors={errors} phoneText = {phoneText} handlerText = {handlerPhoneText}/>
			<Stack sx={{ marginTop: 4 }}>
				<ButtonSubmit onClick={handleSubmit(onSubmit)}>
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
export default PhoneAuth
