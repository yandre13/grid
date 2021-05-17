import Head from 'next/head'
import Image from 'next/image'
import Grid from '../src/components/Grid'
import Navbar from '../src/components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-wrap m-3 md:m-4">
        <Navbar/>
        <div className="relative h-full w-full md:w-[85%] lg:w-[87%] xl:w-[90%]">
            <Grid /> 
            <div className="flex flex-wrap">
                <div className="grid-img grid-ml-1 grid-mt-1
                    md:md-grid-img md:md-grid-ml-1 md:md-grid-mt-1
                    lg:lg-grid-img lg:lg-grid-ml-1 lg:lg-grid-mt-1
                    xl:xl-grid-img xl:xl-grid-ml-1 xl:xl-grid-mt-1">
                    <div className="w-full h-0 overflow-hidden relative ar4x6">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1619937812459-bf054619c8f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="grid-img grid-ml-1 grid-mt-1
                    md:md-grid-img md:md-grid-ml-1 md:md-grid-mt-2
                    lg:lg-grid-img lg:lg-grid-ml-1 lg:lg-grid-mt-2
                    xl:xl-grid-img xl:xl-grid-ml-1 xl:xl-grid-mt-2 
                ">
                    <div className="w-full h-0 overflow-hidden relative ar3x3">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1619918577835-7f407ea12a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="grid-img grid-ml-1 grid-mt-1
                    md:md-grid-img md:md-grid-ml-1 md:md-grid-mt-1
                    lg:lg-grid-img lg:lg-grid-ml-1 lg:lg-grid-mt-3
                    xl:xl-grid-img xl:xl-grid-ml-1 xl:xl-grid-mt-3
                    ">
                    <div className="w-full h-0 overflow-hidden relative ar4x6">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1619918577835-7f407ea12a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="grid-img grid-ml-1 grid-mt-1
                    md:md-grid-img md:md-grid-ml-1 md:md-grid-mt-n1
                    lg:lg-grid-img lg:lg-grid-ml-1 lg:lg-grid-mt-n1
                    xl:xl-grid-img xl:xl-grid-ml-1 xl:xl-grid-mt-2
                    ">
                    <div className="w-full h-0 overflow-hidden relative ar4x6">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1619937812459-bf054619c8f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="grid-img grid-ml-1 grid-mt-1
                md:md-grid-img md:md-grid-ml-1 md:md-grid-mt-1
                lg:lg-grid-img lg:lg-grid-ml-1 lg:lg-grid-mt-n3
                xl:xl-grid-img xl:xl-grid-ml-1 xl:xl-grid-mt-n1
                ">
                    <div className="w-full h-0 overflow-hidden relative ar3x3 lg:ar4x6 xl:ar3x3">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1619918577835-7f407ea12a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="grid-img grid-ml-1 grid-mt-1
                md:md-grid-img md:md-grid-ml-1 md:md-grid-mt-n1
                lg:lg-grid-img lg:lg-grid-ml-1 lg:lg-grid-mt-1
                xl:xl-grid-img xl:xl-grid-ml-1 xl:xl-grid-mt-n3
                ">
                    <div className="w-full h-0 overflow-hidden relative ar4x6">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1619937812459-bf054619c8f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="grid-img grid-ml-1 grid-mt-1 grid-mb-0
                md:md-grid-img md:md-grid-ml-1 md:grid-mt-0
                lg:lg-grid-img lg:lg-grid-ml-1 lg:lg-grid-mt-n1
                xl:xl-grid-img xl:xl-grid-ml-1 xl:xl-grid-mt-1 xl:xl-grid-mb-1
                ">
                    <div className="w-full h-0 overflow-hidden relative ar3x3">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1619918577835-7f407ea12a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full absolute top-0 left-0 object-cover" alt="" />
                        </a>
                    </div>
                </div>

                <div className="grid-img grid-ml-1 grid-mt-1 grid-mb-1
                md:md-grid-img md:md-grid-ml-1 md:md-grid-mt-1 md:md-grid-mb-1
                lg:lg-grid-img lg:lg-grid-ml-1 lg:lg-grid-mt-n3 lg:lg-grid-mb-1
                xl:xl-grid-img xl:xl-grid-ml-1 xl:grid-mt-0 xl:xl-grid-mb-1
                ">
                    <div className="w-full h-0 overflow-hidden relative ar3x3 lg:ar4x6 xl:ar3x3">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1619918577835-7f407ea12a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
