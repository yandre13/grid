import React from 'react'
import cn from 'classnames'
function Grid() {
	return (
		<div className="wrapper-grid">
            <div className="line-left"></div>
            <div className="line-right"></div>
            <div className="line-top"></div>
			<div className="h-full w-full relative flex flex-wrap">

                {Array.from(Array(28).keys()).map(e=><div key={e} className="box-y md:md-box-y lg:lg-box-y xl:xl-box-y">
                    <div className={cn('absolute h-full line-child-y')}></div>
                </div>)}

                <div className="absolute w-full h-full flex flex-col">
                {Array.from(Array(70).keys()).map(e=><div key={e} className="box-x md:md-box-x lg:lg-box-x xl:xl-box-x">
                    <div className="absolute w-full line-child-x"></div>
                </div>)}
                </div>
			</div>
		</div>
	)
}

export default Grid
