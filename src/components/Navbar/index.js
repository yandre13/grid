import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import cn from 'classnames'
import Menu from '../svgs/Menu'
import Logo from '../svgs/Logo'
import {motion, useAnimation} from 'framer-motion'

const variants = {
	visible: {
		y: 0,
		height: 'auto',
		transition: {ease: 'easeInOut', duration: 0.5},
	},
	hidden: {y: -360, height: 0, transition: {ease: 'easeOut', duration: 0.4}},
}

export default function Named() {
	const router = useRouter()
	const [isMobile, setIsMobile] = React.useState(false)
	const [open, setOpen] = React.useState(false)

	const handleResize = () => {
		if (window !== 'undefined') {
			window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
		}
	}

	const controls = useAnimation()

	React.useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', () => handleResize)
	}, [isMobile])

	return (
		<header
			className="mb-3 sm:mb-5 md:mb-0 flex flex-wrap md:block md:pl-2 lg:pl-3 w-full
        md:w-[15%]
        lg:w-[13%] xl:w-[9.8%]"
		>
			<div
				className={cn('w-full order-1 md:order-first flex justify-between', {
					'mt-2': open && isMobile,
				})}
			>
				<h2
					className="font-semibold text-xl
                    md:mt-1 xl:mt-2 md:mb-6 w-full"
				>
					<Logo color="black" classname="w-[35%] sm:w-[25%] md:w-[85%]" />
				</h2>
				<span
					className={cn('flex items-center z-10 cursor-pointer', {
						hidden: !isMobile,
					})}
					onClick={() => {
						setOpen(!open)
						open ? controls.start('hidden') : controls.start('visible')
					}}
				>
					<Menu />
					{!open ? <span>Menu</span> : <span>Close</span>}
				</span>
			</div>
			<motion.nav
				variants={variants}
				animate={controls}
				initial="hidden"
				className={cn(
					'-mt-4 -ml-3 -mr-3 w-[calc(100%+6rem)] bg-black md:w-full md:bg-transparent md:m-0',
					'md:clear-trs',
				)}
			>
				<ul
					className={cn(
						'py-7 block text-center text-gray-400',
						'md:py-0 md:text-left md:text-black',
					)}
				>
					<li className="py-3 md:py-1">
						<Link href="#">
							<a
								className={cn(
									'font-sec font-semibold text-sm',
									{'hover:text-white': isMobile},
									{'text-white': router.pathname === '/' && isMobile},
								)}
							>
								Nosotros
							</a>
						</Link>
					</li>
					<li className="py-3 md:py-1">
						<Link href="#">
							<a
								className={cn('font-sec font-semibold text-sm', {
									'hover:text-white': isMobile,
								})}
							>
								Proyectos
							</a>
						</Link>
					</li>
					<li className="py-3 md:py-1">
						<Link href="#">
							<a
								className={cn('font-sec font-semibold text-sm', {
									'hover:text-white': isMobile,
								})}
							>
								Servicios
							</a>
						</Link>
					</li>
					<li className="py-3 md:py-1">
						<Link href="#">
							<a
								className={cn('font-sec font-semibold text-sm', {
									'hover:text-white': isMobile,
								})}
							>
								Contacto
							</a>
						</Link>
					</li>
				</ul>
			</motion.nav>
		</header>
	)
}
