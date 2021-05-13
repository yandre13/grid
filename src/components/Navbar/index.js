import React from 'react'

export default function Named() {
    return (
        <header className="md:pl-4 w-full
        md:w-[24%]
        lg:w-[20%] xl:w-[14%]">
            <h1 className="font-semibold text-3xl
            md:text-4xl md:mt-4 md:mb-10
            lg:text-[2.2vw]">Visualiza<span className="text-yellow-400 text-4xl">.</span></h1>
            <nav>
                <ul className="hidden md:block">
                    <li className="py-1 text-lg lg:text-[1.3vw]">Nosotros</li>
                    <li className="py-1 text-lg lg:text-[1.3vw]">Contacto</li>
                    <li className="py-1 text-lg lg:text-[1.3vw]">Servicios</li>
                    <li className="py-1 text-lg lg:text-[1.3vw]">Contacto</li>
                </ul>
            </nav>
        </header>
    )
}
