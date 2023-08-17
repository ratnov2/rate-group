import Cookies from 'js-cookie'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { errorCatch } from '@/services/api/error.api'
import { AuthService } from '@/services/auth/auth.service'

export const useCheckAuth = (routeName?: string) => {
	const { user, setUser } = useAuth()

	useEffect(() => {
		const checkAccessToken = async () => {
			const accessToken = Cookies.get('accessToken')
			if (accessToken) {
				try {
				} catch (e) {
					if (errorCatch(e) === 'jwt expired') {
						await AuthService.logout()
						setUser(null)
					}
				}
			}
		}

		checkAccessToken()
	}, [])

	useEffect(() => {
		const checkRefreshToken = async () => {
			const refreshToken = Cookies.get('refreshToken')
			if (!refreshToken && user) {
				await AuthService.logout()
				setUser(null)
			}
		}

		checkRefreshToken()
	}, [routeName])
}
