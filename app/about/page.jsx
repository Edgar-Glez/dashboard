import { IBM_Plex_Mono } from 'next/font/google'
import Foto from '/images/foto.jpg'

const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400', style: 'italic' })
import { Archivo_Narrow } from 'next/font/google'
import Image from 'next/image'
const archivo = Archivo_Narrow({ subsets: ['latin'], weight: '400', style: 'italic' })

export default(About) => {
    return (
        <div className=" w-full ">
            <h1 className={`text-center text-6xl text-white ${mono.className}`}>Acerca de Edgar Gonzalez</h1>
            <div className='flex flex-row justify-center px-8 pt-[10%]  '>
                <div className='border-t-[70px] border-[#1B262C]  w-[50%] justify-center pb-4 h-3  rounded-3xl py-7 '>
                    <h2 className={`text-white text-left text-2xl bg-[#3282B8] border-t-8 border-b-[15px] rounded-2xl border-x-8 border-[#0F4C75] px-4 ${archivo.className}`}>Soy un programador optimista con mucha persistencia, dedicacion, y ganas de graduarme</h2>
                    <h2 className={`text-white text-left text-2xl bg-[#3282B8]  border-t-8 border-b-[15px] rounded-2xl border-x-8 border-[#0F4C75] px-4 ${archivo.className}`}>Mi fortaleza esta mas en el backend, el Front-End nunca ha sido mi fuerza</h2>
                    <h2 className={`text-white text-left text-2xl bg-[#3282B8]  border-t-8 border-b-[15px] rounded-2xl border-x-8 border-[#0F4C75] px-4 ${archivo.className}`}>Espero poderme graduar en este semestre y trabajar como desarrollador backend en alguna empresa, lo mas probable es que sea en Tijuana, pero le apunto a trabajar con Home Office</h2>
                    
                </div>
                <div className=' pl-10 w-[50%] justify-center align-middle'>
                    <Image src={Foto} width={600} height={600} className='rounded-full' />
                </div>
            </div>
        </div>
    )
}