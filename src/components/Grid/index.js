import React from 'react'

function Grid() {
	return (
		<div className="wrapper-grid">
            <div class="line-left"></div>
            <div class="line-top"></div>
			<div className="h-full w-full relative flex flex-wrap">

                {Array.from(Array(29).keys()).map(e=><div key={e} className="box-y md:md-box-y lg:lg-box-y xl:xl-box-y"></div>)}

                <div className="absolute w-full h-full flex flex-col">
                {Array.from(Array(40).keys()).map(e=><div key={e} className="pbox-x md:md-pbox-x lg:lg-pbox-x xl:xl-pbox-x"></div>)}
                </div>
			</div>
		</div>
	)
}

export default Grid
