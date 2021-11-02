import Head from 'next/head'
import {useRouter} from 'next/router'
import {AnimateSharedLayout, AnimatePresence} from 'framer-motion'

import Grid from 'components/Grid'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import ListPortfolio from 'components/List/ListPortfolio'
import Item from 'components/List/Item'
import useLoaded from 'hooks/useLoaded'

export default function Home() {
	const {
		query: {projectId},
	} = useRouter()
	const loaded = useLoaded()
	return (
		<AnimateSharedLayout type="crossfade">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-wrap my-3 mx-3 md:my-4 md:ml-0 md:mr-4">
				<Navbar />
				<div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[89%]">
					<Grid loaded={loaded} />
					<div className="flex flex-wrap">
						{/* <div className="hidden my-[12.5%] md:mt-[-13.32%]"></div>
						<div className="hidden my-[12.5%] md:mt-[-33.3%]"></div>
						<div className="hidden my-[12.5%] md:mt-[-53.28%] md:my-[6.66%] lg:mt-[-9.08%] lg:mt-[-49.94%] lg:ml-[36.32%]"></div>
						<div className="hidden lg:mt-[-63.56%]"></div>
						<div className="hidden xl:mt-[-17.24%]"></div>
						<div className="hidden xl:mt-[24.136%]"></div>
						<div className="hidden xl:mt-[-37.928%] xl:ml-[27.584%]"></div>
						<div className="hidden lg:mb-[-4.54%] lg:mt-[-22.7%]"></div> */}
						{/* <div className="hidden lg:mt-[-81.72%] lg:mt-[-36.32%] xl:mt-[-27.584%]"></div> */}
						<ListPortfolio />
						<AnimatePresence>
							{projectId && <Item id={projectId} key="item" />}
						</AnimatePresence>
					</div>
				</div>
			</main>
		</AnimateSharedLayout>
	)
}
