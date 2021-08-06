import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {data as api} from 'data'
import {useQuery} from 'react-query'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/zoom/zoom.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import SwiperCore, {Pagination, Navigation, Zoom} from 'swiper/core'
import useMedia from 'hooks/useMedia'

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Zoom])

function Item({id}) {
	const {data: project} = useQuery(['item', id], () =>
		api.find(p => p.id === Number(id)),
	)
	// const project = React.useMemo(() => api.find(p => p.id === Number(id)), [id])
	console.log(project)
	const [imageName, setImageName] = React.useState('')
	const isMobile = useMedia('(max-width: 767px)')
	const scrollRef = React.useRef(0)
	React.useEffect(() => {
		scrollRef.current = window?.scrollY
		if (isMobile) {
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollRef.current}px`
		}
		return () => {
			console.log(scrollRef.current)
			document.body.style.position = ''
			document.body.style.top = ''
			window.scrollTo(0, scrollRef.current ?? 0)
		}
	}, [isMobile])
	if (!project) {
		return null
	}
	return (
		<>
			<motion.div
				// initial={{opacity: 0}}
				// animate={{opacity: 1}}
				// exit={{opacity: 0, transition: {duration: 0.15}}}
				// transition={{duration: 0.2, delay: 0.15}}
				style={{pointerEvents: 'auto'}}
				className="overlay"
			>
				<Link href="/portafolio" scroll={false}>
					<a></a>
				</Link>
			</motion.div>

			<motion.div
				// layoutId={`card-${id}`}
				// animate={{scale: [1, 1.2, 1]}}
				// exit={{scale: 0.96, transition: {duration: 0.35}}}
				// transition={{duration: 0.7, delay: 0.15}}
				className="fixed top-0 left-0 h-[100vh] md:h-[90vh] w-full z-20
				md:w-[72.4%] md:left-[20.9%] md:right-[6.7%] md:top-[7vw]
				lg:w-[77%] lg:left-[17.8%] lg:right-[5.2%] lg:top-[5.2vw]
				xl:w-[76.06%] xl:left-[16.67%] xl:right-[7.27%] xl:top-[4.3vw] 2xl:top-[4vw]"
			>
				<div className="relative w-full h-full bg-black flex flex-wrap">
					{project.id && (
						<>
							<div className="w-full h-[55vh] md:h-[74vh] lg:w-[76%] lg:h-full bg-white">
								<motion.div
									// animate={{opacity: [0.5, 1]}}
									// exit={{opacity: 0.5, transition: {duration: 0.45}}}
									// transition={{duration: 0.5, delay: 0.25}}
									className="w-full h-full"
								>
									<Swiper
										pagination={{clickable: true}}
										loop={project.carousel.images.length > 1}
										navigation
										grabCursor
										zoom
										onSwiper={() => {
											setImageName(project.carousel.images[0]?.name)
										}}
										onSlideChange={e => {
											console.log(e.activeIndex)
											console.log(project.carousel.images.length)
											if (project.carousel.images.length > 1) {
												setImageName(
													project.carousel.images[e.activeIndex - 1]?.name ??
														project.carousel.images[0].name,
												)
											}
										}}
									>
										{project.carousel.images.map(({path}) => (
											<SwiperSlide key={path}>
												<article className="w-full h-full">
													<div className="w-full min-w-full h-full relative flex justify-center swiper-zoom-container">
														<img
															src={path}
															alt=""
															className="h-full w-auto absolute top-0 !object-cover"
															// layout="fill"
															// width={1920}
															// height={1440}
														/>
													</div>
												</article>
											</SwiperSlide>
										))}
									</Swiper>
								</motion.div>
							</div>
							<div
								className="h-[45vh] md:h-[20vh] lg:h-full w-full lg:w-[24%]
								p-8 md:p-8 lg:px-6
							flex items-center flex-col md:flex-row lg:flex-col md:justify-between"
							>
								<img
									src={project.carousel.logo}
									alt=""
									className="h-auto !w-auto max-w-[160px]"
									// layout="fill"
									// width={1920}
									// height={1440}
								/>
								<div className="text-right self-end md:self-auto lg:self-end mt-12 md:mt-0">
									<h3 className="text-white text-2xl font-sec">
										{project.title}
									</h3>
									<p className="text-white font-main mb-3">{imageName}</p>
									<p className="text-white text-lg font-main leading-tight">
										{project.place}
									</p>
									<p className="text-white text-lg font-main leading-tight">
										{project.date}
									</p>
								</div>
							</div>
							<div
								className="absolute rounded-full w-7 h-7 z-10
							bg-white bg-opacity-60 flex justify-center items-center font-bold top-4 right-4 text-[#222]
							md:w-6 md:h-6 md:rounded-none md:text-xl md:right-auto md:left-4"
							>
								<Link href="/portafolio" scroll={false}>
									<a>x</a>
								</Link>
							</div>
						</>
					)}
				</div>
			</motion.div>
		</>
	)
}

export default Item
