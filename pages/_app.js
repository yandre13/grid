import React from 'react'
import '../styles/globals.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {Hydrate} from 'react-query/hydration'
import {ReactQueryDevtools} from 'react-query/devtools'
import {AppQueryProvider, AppWidthProvider} from 'context'

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
	const [width, setWidth] = React.useState(0)

	// sm: '540px',
	// 		md: '768px',
	// 		lg: '1048px',
	// 		xl: '1280px',

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<AppWidthProvider>
					<AppQueryProvider>
						<Component {...pageProps} />
					</AppQueryProvider>
				</AppWidthProvider>
			</Hydrate>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default MyApp
