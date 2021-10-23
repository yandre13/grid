import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

export default function CardHome({
	aspectRatio,
	image,
	title,
	description,
	children,
	...props
}) {
	return (
		<div {...props}>
			<div className={cn('w-full h-full relative', aspectRatio)}>
				<a href="#">
					<Image
						src={image}
						className="w-full h-full absolute top-0 left-0 object-cover"
						alt=""
						placeholder="blur"
					/>
				</a>
				<div
					className={cn(
						'absolute bg-black bottom-[-16.66%] w-[50%]',
						title.includes('B') ? 'right-0' : '',
						'pb-[16.66%] md:w-[22.22%] md:bottom-0 md:right-[-22.22%] md:pb-[22.22%] xl:w-[25%] xl:right-[-25%] xl:pb-[25%]',
					)}
				>
					<div className="absolute h-full w-full text-center md:text-left flex justify-center items-center text-white flex-col">
						<span className="w-[90%] text-xs sm:text-base md:text-sm font-sec">
							{title}
						</span>
						<span className="w-[90%] text-xs sm:text-base md:text-xs font-main">
							{description}
						</span>
					</div>
				</div>
				{children}
			</div>
		</div>
	)
}
