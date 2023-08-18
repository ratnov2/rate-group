import { useRouter } from 'next/router'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import { setUser } from '@/store/auth/authSlice'

import { useAppDispatch, useAppSelector } from '@/hooks/store.hook'

import { IContext, TypeUserState } from './auth-provider.interface'
import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper'

export const AuthContext = createContext({})

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const user = useAppSelector(state => state.auth.user)
	const dispatch = useAppDispatch()
	const router = useRouter()
	const [verified, setVerified] = useState(false)
	console.log('auth', user)

	useEffect(() => {
		const checkAccessToken = () => {
			try {
				const accessToken = getAccessToken()
				if (accessToken) {
					const user = getUserFromStorage()
					dispatch(setUser(user))
					console.log('access')
				} else {
					router.replace('/auth/check-phone')
				}
			} catch {
			} finally {
				setVerified(true)
			}
		}
		checkAccessToken()
	}, [])
	if (verified)
		return (
			<AuthContext.Provider value={{ user }}>
				{children}
			</AuthContext.Provider>
		)
}

export default AuthProvider
