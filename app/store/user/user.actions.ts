import { createAsyncThunk } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { IAuthFormData, IAuthResponse } from '@/shared/types/auth.interface'

import { errorCatch } from '@/services/api/error.api'
import { saveToStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

export const registerAction = createAsyncThunk(
	'api/register',
	async ({ phone, password }: IAuthFormData, thunkAPI) => {
		try {
			const response = await AuthService.main('reg', phone, password)
			// toastr.success('Registration', 'Completed successfully')
			return response
		} catch (error: any) {
			// toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const loginAction = createAsyncThunk(
	'api/login',
	async ({ phone, password }: IAuthFormData, thunkAPI) => {
		try {
			const response = await AuthService.main('login', phone, password)
			//toastr.success('Login', 'Completed successfully')
			if (response.accessToken) saveToStorage(response.data)

			return response.data
		} catch (error: any) {
			//toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)
export const logoutAction = createAsyncThunk(
	'logout',
	async () => await console.log('')
)

export const checkAuth = createAsyncThunk(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await authApi.getNewTokens()
			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				// toastr.error(
				// 	'Logout',
				// 	'Your authorizaiton is finished, plz sign in again'
				// )
				thunkAPI.dispatch(logoutAction())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
