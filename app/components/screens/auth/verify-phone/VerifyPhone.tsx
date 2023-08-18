import { Stack, Typography } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { FC, createContext, useContext, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IPasswordConfirm, IVerifyCode } from '@/shared/types/auth.interface'

import { StepAuthorizationContext } from '../Auth'
import ButtonSubmit from 'ui/form-ui/button/Button'

import PhoneVerifyFields from './PhoneVerifyFields'
import useVerifyCode from './useVerifyCode'
import { AuthService } from '@/services/auth/auth.service'

const DynamicTimerAuth = dynamic(() => import('ui/timers-auth/TimerAuth'), {
	ssr: false
})

interface IStepVerify {
	isSendVerify: boolean
	isSendCode: boolean
}

interface IStepVerifyContext {
	stepVerify: IStepVerify
}

const StepVerifyContext = createContext({})

const VerifyPhone: FC = () => {
	const { stepAuth } = useContext(StepAuthorizationContext)
	const [stepVerify, setStepVerify] = useState({
		isSendVerify: false,
		isSendCode: false
	})

	const handlerStepVerify = (data: IStepVerify) => {
		setStepVerify(data)
	}

	const { sendVerifyCode, verifyCode } = useVerifyCode()

	const [timer, setTimer] = useState({
		timer1: {
			initialMinute: 1,
			initialSeconds: 0,
			isWorking: false
		},
		timer2: {
			initialMinute: 30,
			initialSeconds: 0,
			isWorking: false
		}
	})

	const handlerTimer = (
		isWorking: boolean,
		timerField: 'timer1' | 'timer2'
	) => {
		setTimer(timer => ({
			...timer,
			timer1: { ...timer[timerField], isWorking }
		}))
	}

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors, isValid }
	} = useForm<IVerifyCode>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IVerifyCode> = data => {
		const code = Number(
			data.oneCode + '' + data.twoCode + data.threeCode + data.fourCode
		)
		verifyCode.mutate({ code })
	}

	return (
		<StepVerifyContext.Provider value={{ stepVerify, handlerStepVerify }}>
			<Stack>
				<Typography variant='h3' sx={{ marginTop: 4, marginBottom: 4 }}>
					На номер {stepAuth.phone} поступит СМС,
					<br /> введите 4 цифры кода из СМС
				</Typography>
				<PhoneVerifyFields errors={errors} register={register} />
				{stepVerify && (
					<Stack>
						<Stack>
							<Typography sx={{ display: 'flex' }}>
								{timer.timer1.isWorking ? (
									<>Отправить повторно через</>
								) : (
									<>Отправить заного</>
								)}
							</Typography>
							<DynamicTimerAuth
								initialMinute={timer.timer1.initialMinute}
								initialSeconds={timer.timer1.initialSeconds}
								handlerTimer={(isWorking: boolean) =>
									handlerTimer(isWorking, 'timer1')
								}
								isWorking={timer.timer1.isWorking}
							/>
						</Stack>
						<Stack>
							<Typography sx={{ display: 'flex' }}>
								{timer.timer2.isWorking ? (
									<>SMS истечет через</>
								) : (
									<>Отправить заного</>
								)}
							</Typography>
							<DynamicTimerAuth
								initialMinute={timer.timer2.initialMinute}
								initialSeconds={timer.timer2.initialSeconds}
								handlerTimer={(isWorking: boolean) =>
									handlerTimer(isWorking, 'timer1')
								}
								isWorking={timer.timer2.isWorking}
							/>
						</Stack>
					</Stack>
				)}
				<Stack sx={{ marginTop: 2 }}>
					<ButtonSubmit
						disabled={!isValid}
						onClick={handleSubmit(onSubmit)}
					>
						<Typography variant='h2'>Сохранить и войти</Typography>
					</ButtonSubmit>
				</Stack>
			</Stack>
		</StepVerifyContext.Provider>
	)
}

export default VerifyPhone
