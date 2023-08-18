import { FC } from 'react'

import AuthLayout from '@/screens/auth/auth-layout/AuthLayout'
import CheckPhone from '@/screens/auth/check-phone/CheckPhone'

const CheckPhonePage = () => {
	return (
		<AuthLayout>
			<CheckPhone />
		</AuthLayout>
	)
}

export default CheckPhonePage
