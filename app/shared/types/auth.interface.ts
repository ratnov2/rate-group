import { IUser } from './user.interface'

export interface IAuthFormData extends Pick<IUser, 'phone' | 'password'> {}

export interface IAuthFormDataRegister extends Pick<IUser, 'phone' | 'password'> {
	contract?: string
}

export interface IAuthPhone extends Pick<IUser, 'phone'> {}

export interface IVerifyCode {
	oneCode: number
	twoCode: number
	threeCode: number
	fourCode: number
}

export interface IPasswordConfirm {
	password: string
	confirmPassword: string
}
export interface INewAccount extends IPasswordConfirm {
	contract?: string
}

export enum EnumSecureStore {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

export enum EnumAsyncStorage {
	USER = 'user'
}
export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}

export interface IAuthCheckPhone {}
