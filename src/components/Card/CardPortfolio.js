import React from 'react'
import cn from 'classnames'

export default function CardPortfolio({classnames, aspectRatio, image, title}) {
	const [isHover, setIsHover] = React.useState(false)
	return (
		<div className={classnames}>
			<div className={cn('w-full h-0 overflow-hidden relative', aspectRatio)}>
				<a href="#">
					<img
						src={image}
						className={cn(
							'w-full h-full absolute top-0 left-0 object-cover',
							isHover && 'filter grayscale contrast-600',
						)}
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
						onTouchStart={() => setIsHover(true)}
						onTouchEnd={() => setIsHover(false)}
						alt=""
					/>
				</a>
				<div
					className={cn(
						isHover ? 'block' : 'hidden',
						'absolute w-full h-full bg-white bg-opacity-60 pointer-events-none',
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
			</div>
		</div>
	)
}
