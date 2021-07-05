import Head from 'next/head'
import {useRouter} from 'next/router'
import {AnimateSharedLayout, AnimatePresence} from 'framer-motion'

import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import ListPortfolio from 'components/List/ListPortfolio'
import Item from 'components/List/Item'

export default function Home() {
	const {
		query: {projectId},
	} = useRouter()
	return (
		<AnimateSharedLayout type="crossfade">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-wrap m-3 md:m-4">
				<Navbar />
				<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[90%]">
					<Grid />
					<div className="flex flex-wrap">
						<ListPortfolio selectedId={projectId} />
						<AnimatePresence>
							{projectId && <Item id={projectId} key="item" />}
						</AnimatePresence>
					</div>
					<Footer />
				</div>
			</main>
		</AnimateSharedLayout>
	)
}
