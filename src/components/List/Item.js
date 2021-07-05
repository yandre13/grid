import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import image1 from '../../../public/img/img_grid_1.png'
function Item({id}) {
	return (
		<>
			<motion.div
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0, transition: {duration: 0.15}}}
				transition={{duration: 0.2, delay: 0.15}}
				style={{pointerEvents: 'auto'}}
				className="overlay"
			>
				<Link href="/portafolio" scroll={false}>
					<a></a>
				</Link>
			</motion.div>

			<div
				className="absolute z-10 w-[75%] ml-[12.5%] mt-[12.5%]
					md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
					lg:w-[27.24%] lg:ml-[9.08%] lg:mt-[4.54%]
					xl:w-[20.688%] xl:ml-[6.896%] xl:mt-[3.448%]"
			>
				<motion.div
					className="w-full h-0 overflow-hidden relative ar4x6"
					layoutId={`card-${id}`}
				>
					<a role="button">
						<Image
							src={image1}
							className="w-full h-full absolute top-0 left-0 object-cover"
							alt=""
							placeholder="blur"
						/>
					</a>
				</motion.div>
			</div>
		</>
	)
}

export default Item
