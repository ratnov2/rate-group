import axios from 'axios'
import Cookies from 'js-cookie'

import { IAuthResponse } from '@/shared/types/auth.interface'

import { saveToStorage } from '../auth/auth.helper'

import { getContentType } from './error.api'

export const getNewTokens = async () => {
	try {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios.post<string, { data: IAuthResponse }>(
			`/auth/login/access-token`,
			{
				refreshToken
			},
			{
				headers: getContentType()
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	} catch {}
}
