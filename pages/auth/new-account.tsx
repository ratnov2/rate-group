import { FC } from 'react'

import { useAppSelector } from '@/hooks/store.hook'

import AuthLayout from '@/screens/auth/auth-layout/AuthLayout'
import NewAccount from '@/screens/auth/new-account/NewAccount'

const NewAccountPage: FC = () => {
	const phone = useAppSelector(state => state.auth.phone)

	if (!phone) return null

	return (
		<AuthLayout>
			<NewAccount />
		</AuthLayout>
	)
}

export default NewAccountPage
