import { Stack, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { Context, createContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthFormData } from '@/shared/types/auth.interface'

import logo from '@/assets/img/logo.png'

import AuthFields from './AuthFields'
import AuthShare from './AuthShare'
import PhoneAuth from './auth-fields/auth-check-phone/PhoneAuth'
import { useAuthMutations } from './useAuthMutations'

// import { Button, Loader } from '@/ui'

export const StepAuthorizationContext = createContext({
	stepAuth: {
		isPhone: false, // проверка на первой запрос телефона
		isFalsePhone: false, // проверка на ответ запроса телефона
		phone: '+79807052934' /// set null after
	},
	HandlerSetStepAuth: (object: any) => ''
})

const Auth = () => {
	const [stepAuth, setStepAuth] = useState({
		isPhone: false,
		isFalsePhone: false,
		phone: '+79807052934'
	})

	const HandlerSetStepAuth = (object: any) => {
		setStepAuth(step => ({ ...step, ...object }))
	}

	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, register, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, loginSync, registerSync } = useAuthMutations(reset)

	// const { isLoading, data } = useLoginQuery()

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		console.log(data)

		if (isReg) registerSync(data)
		else loginSync(data)
	}
	return (
		<Stack sx={theme => ({ margin: 3 })}>
			<StepAuthorizationContext.Provider
				value={{ stepAuth, HandlerSetStepAuth }}
			>
				<StyledAuth>
					<Image src={logo} alt='logo' />
					<Typography
						variant='h1'
						sx={theme => ({ margin: theme.spacing(12, 0, 4, 0) })}
					>
						Добро пожаловать
					</Typography>
					<AuthShare />
				</StyledAuth>
			</StepAuthorizationContext.Provider>
		</Stack>
	)
}

export const StyledAuth = styled(Stack)(({ theme }) => ({
	display: 'flex'
	// '& > h1': {
	// 	margin: theme.spacing(12, 0, 4, 0),
	// 	fontSize: 40
	// }
}))

export default Auth
