import {
	QueryClient,
	QueryClientProvider,
	useQuery
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import AuthProvider from '@/providers/auth/AuthProvider'

import '@/assets/styles/globals.scss'

import { store } from '@/store/store'

import { useAppSelector } from '@/hooks/store.hook'

import { ThemeProvider } from '@/libs/theme'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<ThemeProvider>
						<Component {...pageProps} />
					</ThemeProvider>
				</AuthProvider>
			</QueryClientProvider>
		</Provider>
	)
}
