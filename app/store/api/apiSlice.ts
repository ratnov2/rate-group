// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getAuthUrl } from '@/config/api.config'

// Define our single API slice object
export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
	endpoints: builder => ({
		login: builder.mutation<any, void>({
			query: () => getAuthUrl('login')
		}),
		register: builder.query<any, void>({
			query: () => getAuthUrl('login')
		})
	})
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useLoginMutation } = apiSlice
