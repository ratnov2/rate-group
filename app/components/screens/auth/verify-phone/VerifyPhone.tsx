import { Stack, Typography } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { FC, useContext, useEffect, useState } from 'react'

import { StepAuthorizationContext } from '../Auth'
import PhoneVerifyPhone from 'ui/form-ui/phone-verify-phone/PhoneVerifyPhone'

import { AuthService } from '@/services/auth/auth.service'

const DynamicTimerAuth = dynamic(() => import('ui/timers-auth/TimerAuth'), {
	ssr: false
})

const VerifyPhone: FC = () => {
	const { stepAuth } = useContext(StepAuthorizationContext)
	const [code, setCode] = useState<number[]>([])
	const [isSended, setIsSended] = useState(false)

	const TEST = true
	const handlerSetCode = (index: number, number: number) => {
		const newMassive = [...code]
		newMassive[index] = number
		setCode(code => [...newMassive])
	}
	console.log(code)

	const [enabled, setEnabled] = useState(true)

	const verifyCode = useMutation(
		['send-verify-code'],
		(data: { phone: string; code: number }) =>
			AuthService.checkVerifyCode(data.phone, data.code)
	)

	const sendVerifyCode = useQuery(
		['send-verify-code'],
		() => {
			setIsSended(true)
			return AuthService.sendVerifyCode(stepAuth.phone)
		},
		{
			retry: false
		}
	)

	return (
		<Stack>
			<Typography sx={{ marginTop: 4, marginBottom: 4 }}>
				На номер {stepAuth.phone} поступит СМС,
				<br /> введите 4 цифры кода из СМС
			</Typography>
			<PhoneVerifyPhone code={code} setCode={handlerSetCode} />
			{isSended && (
				<Stack>
					<Stack>
						<Typography sx={{ display: 'flex' }}>
							Отправить повторно через{' '}
							<DynamicTimerAuth
								initialMinute={1}
								initialSeconds={0}
							/>
						</Typography>
					</Stack>
					<Stack>
						<Typography sx={{ display: 'flex' }}>
							SMS истечет через{' '}
							<DynamicTimerAuth
								initialMinute={30}
								initialSeconds={0}
							/>
						</Typography>
					</Stack>
				</Stack>
			)}
			{TEST && <button>Send code (test)</button>}
		</Stack>
	)
}

export default VerifyPhone
