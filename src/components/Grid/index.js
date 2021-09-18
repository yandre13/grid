import {useAppQuery, useAppWidth} from 'context'
import React from 'react'

function Grid({hidden = false}) {
	const gridRef = React.useRef()
	const query = useAppQuery()
	const [width, dispatch] = useAppWidth()

	const lines =
		query === 'xl' ? 29 : query === 'lg' ? 22 : query === 'md' ? 15 : 8

	function resize() {
		dispatch(gridRef.current.getBoundingClientRect().width / lines)
	}
	React.useEffect(() => {
		console.log(gridRef)
		if (gridRef.current) {
			dispatch(gridRef.current.getBoundingClientRect().width / lines)
		}
	}, [query])

	React.useEffect(() => {
		if (!gridRef.current) return null
		visualViewport.addEventListener('resize', resize)
		return () => visualViewport.removeEventListener('resize', resize)
	}, [query])
	console.log(width)
	console.log(query)
	console.log(lines)
	console.log('render grid')
	return (
		<div className="wrapper-grid" ref={gridRef}>
			<div className="line-right"></div>

			<div className="h-full w-full relative flex flex-wrap">
				{Array.from(Array(29).keys()).map(e => (
					<div key={e} style={{width}}>
						{!hidden && <div className="absolute h-full line-child-y"></div>}
					</div>
				))}

				<div className="absolute w-full flex flex-col">
					{Array.from(Array(350).keys()).map(e => (
						<div key={e} style={{height: width}}>
							{!hidden && <div className="absolute w-full line-child-x"></div>}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Grid
