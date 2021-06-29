import React from 'react'
import Logo from '../svgs/Logo'

export default function index() {
    return (
        <footer className="bg-black w-[calc(100%+1.5rem)] md:w-full z-10 absolute -mx-3 md:mx-0">
                <section className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8">
                    <div className="pt-10 pb-5 xl:py-10">
                        <h3 className="font-main text-xl font-medium text-white mb-3 md:mb-6">Services</h3>
                        <ul>
                            <li className='mb-2 font-main text-sm text-gray-300'>
                                Rendering
                            </li>
                            <li className='mb-2 font-main text-sm text-gray-300'>
                                Virtual Readity
                            </li>
                            <li className='mb-2 font-main text-sm text-gray-300'>
                            Photorealism
                            </li>
                            <li className='font-main text-sm text-gray-300'>
                            Illustration
                            </li>
                        </ul>
                    </div>
                    <div className="py-5 sm:pt-10 xl:py-10">
                        <h3 className="font-main text-xl font-medium text-white mb-3 md:mb-6">Information</h3>
                        <p className="font-main text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#" className="block w-full lg:w-[90%] font-main text-base text-gray-300 px-6 py-[6px] border border-gray-300 text-center mt-4">Read more</a>
                    </div>
                    <div className="py-5 xl:py-10">
                        <h3 className="font-main text-xl font-medium text-white mb-3 md:mb-6">Social media</h3>
                        <div className='flex'>
                            <div className='mr-4'>
                                <img width='38' height='38' src='/img/facebook-filled.svg' alt='next' />
                            </div>
                            <div className='mr-4'>
                                <img width='38' height='38' src='/img/instagram-filled.svg' alt='next' />
                            </div>
                            <div>
                                <img width='38' height='38' src='/img/youtube-filled.svg' alt='next' />
                            </div>
                        </div>
                    </div>
                    <div className="py-5 xl:py-10">
                        <h3 className="font-main text-xl font-medium text-white mb-3 md:mb-6">Contact</h3>
                        <form action="#">
                            <div>
                                <input type="email" placeholder='Email' className="w-full bg-transparent text-sm placeholder-gray-300
                                py-1 px-4 mb-3 border border-gray-300 text-gray-200 rounded-none" />
                            </div>
                            <div>
                                <input type="text" placeholder='Name / Nombre' className="w-full bg-transparent text-sm placeholder-gray-300
                                py-1 px-4 mb-3 border border-gray-300 text-gray-200 rounded-none" />
                            </div>
                            <div>
                                <input type="text" placeholder='Subject / Asunto' className="w-full bg-transparent text-sm placeholder-gray-300
                                py-1 px-4 mb-3 border border-gray-300 text-gray-200 rounded-none" />
                            </div>
                            <div>
                                <textarea rows="3" placeholder='Message / Mensaje' className="w-full bg-transparent text-sm placeholder-gray-300
                                py-1 px-4 mb-3 border border-gray-300 text-gray-200 rounded-none"></textarea>
                            </div>
                            <div>
                                <a href="#" className="block w-full font-main text-sm text-gray-300 px-6 py-[6px] border border-gray-300 text-center">Submit / Enviar</a>
                            </div>
                        </form>
                    </div>
                    <div className='row-end-7 mt-6 xl:-mt-8 pb-8'>
                        <Logo color='white' classname='w-[40%] sm:w-[50%]' />
                    </div>
                </section>
            </footer>
    )
}
