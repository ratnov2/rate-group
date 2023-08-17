import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

import logo from '@/assets/img/logo.png'

import { StyledAuth } from '../Auth'

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
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
}

export default AuthLayout
