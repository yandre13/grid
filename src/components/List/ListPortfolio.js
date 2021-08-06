import React from 'react'

import {CardPortfolio} from 'components/Card/CardPortfolio'

import {data} from 'data'

export default function ListPortfolio() {
	return (
		<>
			{data.map(project => {
				return <CardPortfolio key={project.id} project={project} />
			})}
			{/* <CardPortfolio id={1} image={image1}>
				<CardPortfolioContents
					classnames="w-[75%] ml-[12.5%] mt-[12.5%]
					md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
					lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
					xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]"
					aspectRatio="ar4x6"
					title={['PROYECTO CASA A', 'Miraflores 2019']}
				>
					<CardPortfolioOpenButton>
						<CardPortfolioImage />
					</CardPortfolioOpenButton>
				</CardPortfolioContents>
			</CardPortfolio>

			<CardPortfolio id={2} image={image2}>
				<CardPortfolioContents
					classnames="w-[75%] ml-[12.5%] mt-[12.5%]
					md:w-[39.96%] md:ml-[6.66%] md:mt-[13.32%]
					lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[9.08%]
					xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[6.896%]"
					aspectRatio="ar3x3"
					title={['PROYECTO CASA B', 'Miraflores 2019']}
				>
					<CardPortfolioOpenButton>
						<CardPortfolioImage />
					</CardPortfolioOpenButton>
				</CardPortfolioContents>
			</CardPortfolio> */}
			{/* <CardPortfolio
				id={1}
				classnames="w-[75%] ml-[12.5%] mt-[12.5%]
					md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
					lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
					xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%]"
				aspectRatio="ar4x6"
				image={image1}
				title={['PROYECTO CASA A', 'Miraflores 2019']}
				isSelected={1 === selectedId}
			/>

			<CardPortfolio
				id={2}
				classnames="w-[75%] ml-[12.5%] mt-[12.5%]
							md:w-[39.96%] md:ml-[6.66%] md:mt-[13.32%]
							lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[9.08%]
							xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[6.896%]"
				aspectRatio="ar3x3"
				image={image2}
				title={['PROYECTO CASA B', 'Miraflores 2019']}
				isSelected={2 === selectedId}
			/>

			<CardPortfolio
				id={3}
				classnames="w-[75%] ml-[12.5%] mt-[12.5%]
							md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
							lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[13.62%]
							xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[10.344%]"
				aspectRatio="ar4x6"
				image={image3}
				title={['PROYECTO CASA C', 'Miraflores 2019']}
				isSelected={3 === selectedId}
			/>

			<CardPortfolio
				id={4}
				classnames="w-[75%] ml-[12.5%] mt-[12.5%]
							md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
							lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
							xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[6.896%]"
				aspectRatio="ar4x6"
				image={image4}
				title={['PROYECTO CASA D', 'Miraflores 2019']}
				isSelected={4 === selectedId}
			/>

			<CardPortfolio
				id={5}
				classnames="w-[75%] ml-[12.5%] mt-[12.5%]
							md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
							lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-13.62%]
							xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-3.448%]"
				aspectRatio="ar3x3"
				image={image5}
				title={['PROYECTO CASA E', 'Miraflores 2019']}
				isSelected={5 === selectedId}
			/>

			<CardPortfolio
				id={6}
				classnames="w-[75%] ml-[12.5%] mt-[12.5%]
							md:w-[39.96%] md:ml-[6.66%] md:mt-[6.66%]
							lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
							xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[-10.344%]"
				aspectRatio="ar4x6"
				image={image6}
				title={['PROYECTO CASA F', 'Miraflores 2019']}
				isSelected={6 === selectedId}
			/>

			<CardPortfolio
				id={7}
				classnames="w-[75%] ml-[12.5%] mt-[12.5%] mb-0
							md:w-[39.96%] md:ml-[6.66%] md:mt-0
							lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[4.54%]
							xl:w-[20.688%] xl:ml-[3.448%] xl:mt-[3.448%] xl:mb-[3.448%]"
				aspectRatio="ar3x3"
				image={image7}
				title={['PROYECTO CASA G', 'Miraflores 2019']}
				isSelected={7 === selectedId}
			/>

			<CardPortfolio
				id={8}
				classnames="w-[75%] ml-[12.5%] mt-[12.5%] mb-[12.5%]
							md:w-[39.96%] md:ml-[6.66%] md:my-[6.66%]
							lg:w-[27.24%] lg:ml-[4.54%] lg:mt-[-13.62%] lg:mb-[4.54%]
							xl:w-[20.688%] xl:ml-[3.448%] xl:mt-0 xl:mb-[3.448%]"
				aspectRatio="ar3x3"
				image={image8}
				title={['PROYECTO CASA H', 'Miraflores 2019']}
				isSelected={8 === selectedId}
			/> */}
		</>
	)
}
