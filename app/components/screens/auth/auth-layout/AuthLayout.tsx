import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect, useState } from 'react'

import logo from '@/assets/img/logo.png'

import { useAppSelector } from '@/hooks/store.hook'

import { StyledAuth } from '../Auth'

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const user = useAppSelector(state => state.auth.user)
	const router = useRouter()
	useEffect(() => {
		if (user) {
			router.push('/')
		}
	}, [user])
	if (!user)
		return (
			<Stack sx={theme => ({ margin: 3 })}>
				<StyledAuth>
					<Image src={logo} alt='logo' />
					<Typography
						variant='h1'
						sx={theme => ({ margin: theme.spacing(12, 0, 4, 0) })}
					>
						Добро пожаловать
					</Typography>
					{children}
				</StyledAuth>
			</Stack>
		)
	else return null
}

export default AuthLayout
