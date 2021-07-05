import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {motion} from 'framer-motion'
import cn from 'classnames'

export default function CardPortfolio({
	id,
	classnames,
	aspectRatio,
	image,
	title,
}) {
	const router = useRouter()
	const [isHover, setIsHover] = React.useState(false)

	const handleClick = e => {
		e.preventDefault()
		router.push(`?projectId=${id}`, undefined, {shallow: true})
	}
	return (
		<div className={classnames}>
			<motion.div
				className={cn('w-full h-0 overflow-hidden relative', aspectRatio)}
				layoutId={`card-${id}`}
			>
				<a role="button" onClick={handleClick}>
					<Image
						src={image}
						className={cn(
							'w-full h-full absolute top-0 left-0 object-cover',
							isHover && '!filter !grayscale contrast-600 z-0',
						)}
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
						onTouchStart={() => setIsHover(true)}
						onTouchEnd={() => setIsHover(false)}
						alt=""
						placeholder="blur"
					/>
				</a>
				<div
					className={cn(
						isHover ? 'block' : 'hidden',
						'absolute w-full h-full bg-white bg-opacity-60 pointer-events-none top-0',
					)}
				>
					<div className="absolute h-full w-full flex justify-center items-center text-center flex-col">
						<span
							className="w-[90%] text-xs sm:text-base font-sec"
							dangerouslySetInnerHTML={{__html: title[0]}}
						></span>
						<span
							className="w-[90%] text-xs sm:text-base font-main"
							dangerouslySetInnerHTML={{__html: title[1]}}
						></span>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
