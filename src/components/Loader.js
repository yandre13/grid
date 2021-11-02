import React from 'react'

function Loader() {
	return (
		<video autoPlay muted loop id="myVideo" className="myV">
			<source src="img/loader.mp4" type="video/mp4" />
		</video>
	)
}

export default Loader
