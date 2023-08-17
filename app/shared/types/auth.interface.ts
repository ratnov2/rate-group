import { IUser } from './user.interface'

export interface IAuthFormData extends Pick<IUser, 'phone' | 'password'> {}

export interface IAuthPhone extends Pick<IUser, 'phone'> {}

export interface IPasswordConfirm {
	password: string
	confirmPassword: string
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
