import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import cn from 'classnames'
import Menu from '../svgs/Menu'
import {motion, useAnimation} from 'framer-motion'

export default function Named() {

    const router = useRouter()
    const [isMobile, setIsMobile] = React.useState(false)
	const [open, setOpen] = React.useState(false)

	const handleResize = () => {
		if (window !== 'undefined') {
			window.innerWidth < 769 ? setIsMobile(true) : setIsMobile(false)
		}
	}

    const controls = useAnimation()

    const variants = {
        visible: {
            y: 0,
            height: '264px',
            padding: '1.75rem 0',
            transition: { ease: "easeInOut", duration: .5 },
        },
        hidden: {y: -360, height: 0, padding: 0, transition: { ease: "easeOut", duration: .3 }},
    }

    React.useEffect(() => {
        window.onload = ()=>{
            isMobile && controls.start('hidden')
        }
	}, [isMobile])

	React.useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', () => handleResize)
	}, [isMobile])

	console.log(isMobile)

    return (
        <header className="mb-5 md:mb-0 flex flex-wrap md:block md:pl-4 w-full
        md:w-[24%]
        lg:w-[20%] xl:w-[14%]">
            <div className={
                cn('w-full order-1 md:order-first flex justify-between', {'mt-2': open})
            }>
                <h1 className="font-semibold text-3xl
                    md:text-4xl md:mt-4 md:mb-10
                    lg:text-[2.2vw]">Visualiza<span className="text-yellow-400 text-4xl">.</span></h1>
                <button
					className={cn('flex items-center focus:outline-none z-10', {hidden: !isMobile})}
					onClick={() => {
                        setOpen(!open)
                        open ? controls.start('hidden') : controls.start('visible')
                    }}
				>
					<Menu/>
					{!open ? <span>Menu</span> : <span>Close</span>}
				</button>
            </div>
            <motion.nav variants={variants} animate={controls} className={
                cn('-mt-3 -mx-3 w-[110%] bg-black md:w-full md:bg-transparent md:m-0',
                    'md:clear-trs',
                {hidden: !open && isMobile})
            }>
                <ul className={cn(
                    'block text-center text-gray-400',
                    'md:text-left md:text-black',
                    {hidden: isMobile && !open}
                )}>
                    <li className="py-3 md:py-1 font-semibold text-lg lg:text-[1.1vw]">
                        <Link href="#">
                            <a className={cn({'hover:text-white': isMobile}, {'text-white': router.pathname === '/' && isMobile})}>Nosotros</a>
                        </Link>
                    </li>
                    <li className="py-3 md:py-1 font-semibold text-lg lg:text-[1.1vw]">
                        <Link href="#">
                            <a className={cn({'hover:text-white': isMobile})}>Proyectos</a>
                        </Link>
                    </li>
                    <li className="py-3 md:py-1 font-semibold text-lg lg:text-[1.1vw]">
                        <Link href="#">
                            <a className={cn({'hover:text-white': isMobile})}>Servicios</a>
                        </Link>
                    </li>
                    <li className="py-3 md:py-1 font-semibold text-lg lg:text-[1.1vw]">
                        <Link href="#">
                            <a className={cn({'hover:text-white': isMobile})}>Contacto</a>
                        </Link>
                    </li>
                </ul>
            </motion.nav>
        </header>
    )
}
