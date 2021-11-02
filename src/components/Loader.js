import React from 'react'
import Image from 'next/image'
import loader from '../../public/img/loader.gif'

function Loader() {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Image src={loader} width={360} />
		</div>
	)
}

export default Loader
