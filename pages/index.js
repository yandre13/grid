import Head from 'next/head'
import Image from 'next/image'
import Grid from '../src/components/Grid'
import Navbar from '../src/components/Navbar'
import {Splide, SplideSlide} from 'splide-nextjs/react-splide'
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css'
import Link from 'next/link'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-wrap mx-3 mt-3 md:mx-4 md:mt-4">
        <Navbar/>
        <div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[90%]">
            <Grid /> 
            <div className="flex flex-wrap">

                {/* ADS */}
                <div className="w-full ">
                <Splide options={{
					type: 'loop',
					// speed: 700,
					// autoplay: true,
					// interval: 7000,
					// pauseOnHover: false,
					// pauseOnFocus: false,
					arrows: false,
					// rewind: true,
					classes: {
						pagination: 'splide__pagination hs', // container
						page: 'splide__pagination__page splide_p-page', // each button
					},
				}}>
  <SplideSlide>
  <article className="w-full">
			<div className="w-full h-0 overflow-hidden relative pb-[50%] md:pb-[53.28%] lg:pb-[54.42%] xl:pb-[51.69%]">
				<img
					src='/img/COVER.jpg'
					alt=''
					className="absolute top-0 w-full h-full"
					width={1920}
					height={925}
				/>
			</div>
		</article>
  </SplideSlide>
  <SplideSlide>
  <article className="w-full">
			<div className="w-full h-0 overflow-hidden relative pb-[50%] md:pb-[53.28%] lg:pb-[54.42%] xl:pb-[51.7272%]">
				<img
					src='/img/COVER.jpg'
					alt=''
					className="absolute top-0 w-full h-full"
					width={1920}
					height={925}
				/>
			</div>
		</article>
  </SplideSlide>
</Splide>
                </div>
                
                {/* imgs */}


                <div className="w-[75%] ml-[12.5%] mt-[12.5%]
                    md:w-[59.94%] md:ml-[13.32%] md:mt-[6.66%]
                    lg:w-[40.86%] lg:ml-[4.54%] lg:mr-[54.48%] lg:mt-[4.54%]
                    xl:w-[27.587%] xl:ml-[10.344%] xl:mr-0 xl:mt-[3.448%]
                    ">
                    <div className="w-full h-0 relative ar3x3">
                        <a href="#">
                            <img src="/img/home_1.jpg" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                        <div className="absolute bg-black bottom-[-33.33%] w-[100%] right-0 pb-[33.33%] md:w-[22.22%] md:bottom-0 md:right-[-22.22%] md:pb-[22.22%] xl:w-[25%] xl:right-[-25%] xl:pb-[25%]">
                            <div className="absolute h-full w-full text-left flex justify-center items-center text-white flex-col">
                                <span className="w-[90%] text-base md:text-sm font-sec">Proyecto casa&nbsp;A</span>
                                <span className="w-[90%] text-base md:text-xs font-main">Miraflores 2019</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[75%] ml-[12.5%] mt-[37.5%]
                    md:w-[59.94%] md:ml-[13.32%] md:mt-[19.98%]
                    lg:w-[40.86%] lg:ml-[45.4%] lg:mt-[9.08%]
                    xl:w-[27.587%] xl:ml-[17.24%] xl:mt-[13.792%] 
                ">
                    <div className="w-full h-0 relative ar3x3">
                        <a href="#">
                            <img src="/img/home_2.jpg" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                        <div className="absolute bg-black bottom-[-33.33%] w-[100%] right-0 pb-[33.33%] md:w-[22.22%] md:bottom-0 md:right-[-22.22%] md:pb-[22.22%] xl:w-[25%] xl:right-[-25%] xl:pb-[25%]">
                            <div className="absolute h-full w-full text-left flex justify-center items-center text-white flex-col">
                                <span className="w-[90%] text-base md:text-sm font-sec">Proyecto casa&nbsp;B</span>
                                <span className="w-[90%] text-base md:text-xs font-main">Miraflores 2019</span>
                            </div>
                        </div>
                        <div className="z-[-1] absolute md:top-[-24.2%] md:w-[52.28%] md:right-[-26.22%] md:pb-[60.22%] xl:top-[-25%] xl:w-[52.5%] xl:right-[-27.8%] xl:pb-[62.5%]">
                            <img src="/img/img_v.png" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block
                    lg:w-[22.7%] lg:ml-[4.54%] lg:mr-[54.48%] lg:mt-[-27.24%]
                    xl:w-[13.792%] xl:ml-[17.24%] xl:mr-0 xl:mt-[-6.896%]
                    ">
                    <div className="w-full h-0 relative pb-[120%] xl:pb-[125%]">
                        <img src="/img/img_a.png" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                    </div>
                </div>

                <div className="w-[75%] ml-[12.5%] mb-[37.5%] mt-[37.5%]
                    md:w-[59.94%] md:ml-[13.32%] md:mb-0 md:mt-[13.32%]
                    lg:w-[40.86%] lg:ml-[4.54%] lg:mr-[9.08%] lg:mt-[9.08%]
                    xl:w-[27.587%] xl:ml-[27.584%] xl:mr-0 xl:mt-[6.896%]
                    ">
                    <div className="w-full h-0 relative ar3x3">
                        <a href="#">
                            <img src="/img/home_3.jpg" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                        <div className="absolute bg-black bottom-[-33.33%] w-[100%] right-0 pb-[33.33%] md:w-[22.22%] md:bottom-0 md:right-[-22.22%] md:pb-[22.22%] xl:w-[25%] xl:right-[-25%] xl:pb-[25%]">
                            <div className="absolute h-full w-full text-left flex justify-center items-center text-white flex-col">
                                <span className="w-[90%] text-base md:text-sm font-sec">Proyecto casa&nbsp;C</span>
                                <span className="w-[90%] text-base md:text-xs font-main">Miraflores 2019</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden
                    xl:block xl:w-[27.587%] xl:ml-[13.792%] xl:mt-[-17.24%] 
                    ">
                    <div className="w-full h-0 relative ar3x3">
                        <a href="#">
                            <img src="/img/home_4.jpg" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                        <div className="absolute bg-black bottom-[-33.33%] w-[100%] right-0 pb-[33.33%] md:w-[22.22%] md:bottom-0 md:right-[-22.22%] md:pb-[22.22%] xl:w-[25%] xl:right-[-25%] xl:pb-[25%]">
                            <div className="absolute h-full w-full text-left flex justify-center items-center text-white flex-col">
                                <span className="w-[90%] text-base md:text-sm font-sec">Proyecto casa&nbsp;D</span>
                                <span className="w-[90%] text-base md:text-xs font-main">Miraflores 2019</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden xl:block
                    xl:w-[6.896%] xl:ml-[31.032%] xl:mr-0 xl:mt-[3.448%]
                    ">
                    <div className="w-full h-0 relative pb-[150%] xl:pb-[150%]">
                        <img src="/img/img_v2.png" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                    </div>
                </div>

                <div className="w-[50%] mx-auto mt-0
                    md:w-[33.3%] md:mx-auto md:mt-[6.66%]
                    lg:w-[22.7%] lg:ml-[9.08%] lg:mr-[4.54%] lg:mt-[45.4%]
                    xl:w-[10.344%] xl:ml-[3.448%] xl:mr-0 xl:mt-[10.344%]
                    ">
                    <Link href='/portafolio'>
                        <a className="w-full bg-[#FDD704] relative h-0 flex pb-[25%] md:pb-[20%] xl:pb-[33.33%]">
                        <div className="absolute h-full w-[75%] md:w-[80%] xl:w-[66.66%] text-center text-sm md:text-base xl:text-xs font-sec inline-flex justify-center items-center">
                            Ver más proyectos
                        </div>
                        <div className="absolute h-full w-[25%] md:w-[20%] xl:w-[33.33%] text-center text-xl font-third inline-flex justify-center items-center right-0">
                            <span className="transform scale-[1.5]">+</span>
                        </div>
                        </a>
                    </Link>
                </div>


                {/* LAST */}
                <article className="w-full">
                    <div className="w-full h-0 overflow-hidden relative pb-[50%] 
                    md:pb-[39.96%] 
                    lg:pb-[36.32%] 
                    xl:pb-[31.032%]">
                        <img
                            src='/img/FOOTER.jpg'
                            alt=''
                            className="absolute top-0 w-full h-full"
                            width={1920}
                            height={925}
                        />
                    </div>
                </article>
            </div>
            <Footer />
        </div>
      </main>
      
    </>
  )
}
