import { IAuthResponse } from '@/shared/types/auth.interface'

import { getAuthUrl } from '@/config/api.config'

import { request } from '../api/request.api'

import { removeTokensStorage, saveToStorage } from './auth.helper'

export const AuthService = {
	async main(variant: 'reg' | 'login', phone: string, password: string) {
		const response = await request<IAuthResponse>({
			url: getAuthUrl(`${variant === 'reg' ? '/register' : '/login'}`),
			method: 'POST',
			data: { phone, password }
		})

		if (response.accessToken) saveToStorage(response)

		return response
	},
	async checkPhone(phone: string) {
		const response = await request<boolean>({
			url: getAuthUrl('/is-logged-in'),
			method: 'POST',
			data: { phone }
		})

		return response
	},
	async sendVerifyCode(phone: string) {
		const response = await request<boolean>({
			url: '/phone-verification/send-verify-code',
			method: 'POST',
			data: { phone }
		})
		return response
	},

	async checkVerifyCode(phone: string, code: number) {
		const response = await request<string>({
			url: '/phone-verification/verify-code',
			method: 'POST',
			data: { phone, code }
		})
		return response
	},

	async logout() {
		removeTokensStorage()
	}
}
