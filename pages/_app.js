import React from 'react'
import '../styles/globals.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Hydrate} from 'react-query/hydration'
import {ReactQueryDevtools} from 'react-query/devtools'

function MyApp({Component, pageProps}) {
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 600000,
						cacheTime: 900000,
						refetchOnMount: false,
						refetchOnWindowFocus: false,
						refetchOnReconnect: false,
					},
				},
			}),
	)

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default MyApp
