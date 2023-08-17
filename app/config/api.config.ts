export const SERVER_URL =
	process.env.REACT_APP_SERVER_URL || 'http://nikita-cmo.ru'
export const API_URL = `${SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
// export const getAuthUrl = (string: string) => `/auth${string}`
// export const getAuthUrl = (string: string) => `/auth${string}`
