import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'
import { IContext, TypeUserState } from './auth-provider.interface'

import { getAccessToken } from '@/services/auth/auth.helper'

export const AuthContext = createContext({} as IContext)


const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)

	useEffect(() => {

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken()

				if (accessToken) {
					//const user = await getUserFromStorage()

					
				}
			} catch {
			} finally {
				// await SplashScreen.hideAsync()
			}
		}
		checkAccessToken()

		return () => {
			
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
