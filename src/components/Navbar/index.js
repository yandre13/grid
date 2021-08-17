import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import cn from 'classnames'
import Menu from '../svgs/Menu'
import Logo from '../svgs/Logo'
import {motion} from 'framer-motion'
import useMedia from 'hooks/useMedia'

const variants = {
	visible: {
		y: 0,
		height: 'auto',
		transition: {ease: 'easeInOut', duration: 0.5},
	},
	hidden: {y: -360, height: 0, transition: {ease: 'easeOut', duration: 0.4}},
}

function Navbar() {
	const router = useRouter()
	const isMobile = useMedia('(max-width: 767px)')
	const [open, setOpen] = React.useState(false)
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
				<h2 className="font-semibold text-xl md:mt-1 xl:mt-2 md:mb-6 w-full">
					<Link href="/">
						<a>
							<Logo color="black" classname="w-[35%] sm:w-[25%] md:w-[85%]" />
						</a>
					</Link>
				</h2>
				<span
					className={cn('flex items-center z-10 cursor-pointer', {
						hidden: !isMobile,
					})}
					onClick={() => setOpen(!open)}
				>
					<Menu />
					{!open ? <span>Menu</span> : <span>Close</span>}
				</span>
			</div>
			<motion.nav
				variants={variants}
				animate={open ? 'visible' : 'hidden'}
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
						<a
							className={cn(
								'font-sec font-semibold text-sm',
								{'hover:text-white': isMobile},
								{'text-white': router.pathname === '/' && isMobile},
							)}
						>
							Nosotros
						</a>
					</li>
					<li className="py-3 md:py-1">
						<Link href="portafolio">
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
						<a
							className={cn('font-sec font-semibold text-sm', {
								'hover:text-white': isMobile,
							})}
						>
							Servicios
						</a>
					</li>
					<li className="py-3 md:py-1">
						<a
							className={cn('font-sec font-semibold text-sm', {
								'hover:text-white': isMobile,
							})}
						>
							Contacto
						</a>
					</li>
				</ul>
			</motion.nav>
		</header>
	)
}

// Navbar= React.memo(Navbar)
export default Navbar
