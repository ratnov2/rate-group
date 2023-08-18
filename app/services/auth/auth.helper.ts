import Cookies from 'js-cookie'

import {
	EnumAsyncStorage,
	EnumSecureStore,
	IAuthResponse,
	ITokens
} from '@/shared/types/auth.interface'

export const saveTokensStorage = (data: any) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const saveToStorage = (data: any) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

export const getAccessToken = () => {
	const accessToken = Cookies.get('accessToken')
	return accessToken || null
}

export const getUserFromStorage = () => {
	try {
		return JSON.parse(localStorage.getItem('user') || '{}')
	} catch (e) {
		return null
	}
}
// export const deleteTokensStorage = async () => {
// 	await deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)
// 	await deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)
// }

// export const saveTokensStorage = async (data: ITokens) => {
// 	await setItemAsync(EnumSecureStore.ACCESS_TOKEN, data.accessToken)
// 	await setItemAsync(EnumSecureStore.REFRESH_TOKEN, data.refreshToken)
// }

// export const getUserFromStorage = async () => {
// 	try {
// 		return JSON.parse(
// 			(await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}'
// 		)
// 	} catch (e) {
// 		return null
// 	}
// }
// export const saveToStorage = async (data: IAuthResponse) => {
// 	await saveTokensStorage(data)
// 	try {
// 		return JSON.parse(
// 			((await AsyncStorage.setItem(
// 				EnumAsyncStorage.USER,
// 				JSON.stringify(data.user)
// 			)) as any) || '{}' //TODO any
// 		)
// 	} catch (e) {}
// }
