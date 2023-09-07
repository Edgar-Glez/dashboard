import { IBM_Plex_Mono } from 'next/font/google'
import Foto from '/images/foto.jpg'

const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400', style: 'italic' })
import { Archivo_Narrow } from 'next/font/google'
import Image from 'next/image'
const archivo = IBM_Plex_Mono({ subsets: ['latin'], weight: '400', style: 'italic' })

import Link from "next/link";
const menuRoutes = [
    {
        ruta: "/",
        nombre: "Inicio"
    },
    {
        ruta: "/about",
        nombre: "Acerca De"
    },
    {
        ruta:"/composicion",
        nombre: "Composicion Corporal"
    }
]

export default function Menu() {
    return (
        <div className=" w-[30%] bg-[#0F4C75] h-screen rounded-xl border-l-[#0F4C75] border-l-4 border-r-[#BBE1FA] border-r-4 pl">
            <h1 className={`text-white text-center text-4xl ${mono.className}`}>Soy el menu</h1>
            <center>
            <ol>
                {
                    menuRoutes.map((menu,key) => (
                        
                        <li key={key} className={`text-white text-center w-full text-xl ${archivo.className}`}><Link href={menu.ruta} className={`  text-center bg-[#3282B8]`}>{menu.nombre}</Link></li>
                    ))
                }
            </ol>
            </center>

        </div>
    )
}