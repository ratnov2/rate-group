import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAppSelector } from '@/hooks/store.hook'

import { AuthService } from '@/services/auth/auth.service'

const useVerifyCode = () => {
	const router = useRouter()
	const phone = useAppSelector(state => state.auth.phone)
	console.log('phone', phone)

	const verifyCode = useMutation(
		['send-verify-mutation'],
		(data: { code: number }) =>
			AuthService.checkVerifyCode(String(phone), data.code),
		{
			// onError:()=>{},
			onSuccess: () => router.push('/auth/new-account')
		}
	)

	const sendVerifyCode = useQuery(
		['send-verify-code'],
		() => {
			if (phone) return AuthService.sendVerifyCode(String(phone))
		},
		{
			retry: false,
			onError: (error: any) => {
				console.log('errorara', error)
				if (error.message === 'Phone number already verified') {
					router.push('/auth/new-account')
				}
			}
		}
	)
	return { verifyCode, sendVerifyCode }
}

export default useVerifyCode
