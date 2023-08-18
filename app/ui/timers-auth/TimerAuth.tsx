import { Button, Stack, styled } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react'

import { getTimeRemaining, startTimer } from './helper-timer-auth'

interface ITimerAuth {
	initialMinute?: number
	initialSeconds?: number
	handlerTimer: (isWorking: boolean) => void
	isWorking: boolean
}

const TimerAuth: FC<ITimerAuth> = ({
	handlerTimer,
	initialMinute,
	initialSeconds,
	isWorking
}) => {
	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef<any>(null)

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00')

	const clearTimer = (e: any) => {
		handlerTimer(true)

		setTimer(`00:${initialMinute}:${initialSeconds}`)
		if (Ref.current) clearInterval(Ref.current)
		const id = setInterval(() => {
			startTimer(e, setTimer)
		}, 1000)
		Ref.current = id
	}

	const getDeadTime = () => {
		let deadline = new Date()

		deadline.setSeconds(deadline.getSeconds() + 10)
		console.log('dead')

		return deadline
	}

	useEffect(() => {
		clearTimer(getDeadTime())
	}, [])

	const onClickReset = () => {
		handlerTimer(false)
		clearTimer(getDeadTime())
	}

	return (
		<Stack>
			<h2>{timer}</h2>
			{!isWorking ? (
				<StyledButtonTimer disabled={isWorking} onClick={onClickReset}>
					Reset
				</StyledButtonTimer>
			) : (
				<>заного</>
			)}
		</Stack>
	)
}

const StyledButtonTimer = styled(Button)(({ theme }) => ({}))

export default TimerAuth
