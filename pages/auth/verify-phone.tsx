import { FC } from 'react'

import AuthLayout from '@/screens/auth/auth-layout/AuthLayout'
import VerifyPhone from '@/screens/auth/verify-phone/VerifyPhone'

const VerifyPhonePage: FC = () => {
	return (
		<AuthLayout>
			<VerifyPhone />
		</AuthLayout>
	)
}

export default VerifyPhonePage
