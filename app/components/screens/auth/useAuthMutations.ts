import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth()
	const { mutate: loginSync, isLoading: isLoginLoading } = useMutation(
		['login'],
		({ phone, password }: IAuthFormData) =>
			AuthService.main('login', phone, password),
		{
			onSuccess(data) {
				reset()
				setUser(data.user)
			}
		}
	)
	const { mutate: registerSync, isLoading: isRegisterLoading } = useMutation(
		['register'],
		({ phone, password }: IAuthFormData) =>
			AuthService.main('reg', phone, password),
		{
			onSuccess(data) {
				reset()
				setUser(data.user)
			}
		}
	)

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
