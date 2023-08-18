import { FC } from 'react'

import AuthLayout from '@/screens/auth/auth-layout/AuthLayout'
import ForgotPassword from '@/screens/auth/forgot-password/ForgotPassword'
import FullAuth from '@/screens/auth/full-auth/FullAuth'

const LoginPage: FC = () => {
	return (
		<AuthLayout>
			<FullAuth />
		</AuthLayout>
	)
}

export default LoginPage
