import React from 'react'

function Grid() {
	return (
		<div className="wrapper-grid">
			<div className="line-left"></div>
			<div className="line-right"></div>
			<div className="line-top"></div>
			<div className="h-full w-full relative flex flex-wrap">
				{Array.from(Array(28).keys()).map(e => (
					<div key={e} className="box-y md:md-box-y lg:lg-box-y xl:xl-box-y">
						<div className="absolute h-full line-child-y"></div>
					</div>
				))}

				<div className="absolute w-full h-full flex flex-col">
					{Array.from(Array(350).keys()).map(e => (
						<div key={e} className="box-x md:md-box-x lg:lg-box-x xl:xl-box-x">
							<div className="absolute w-full line-child-x"></div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
Grid = React.memo(Grid)
export default Grid
