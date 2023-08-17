import { FC, ReactNode, useContext } from 'react'

import { StepAuthorizationContext } from './Auth'
import PhoneAuth from './auth-fields/auth-check-phone/PhoneAuth'
import FullAuth from './full-auth/FullAuth'
import VerifyPhone from './verify-phone/VerifyPhone'

const AuthShare: FC<{ children?: ReactNode }> = ({ children }) => {
	const { stepAuth } = useContext(StepAuthorizationContext)

	if (!stepAuth.isPhone) return <PhoneAuth /> // uncommented after tests

	if (!stepAuth.isFalsePhone) return <VerifyPhone />

	if (!stepAuth.isFalsePhone) return <FullAuth />

	return <div>{children}</div>
}

export default AuthShare
