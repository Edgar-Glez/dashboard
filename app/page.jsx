import { IBM_Plex_Mono } from 'next/font/google'
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400', style: 'italic' })


function Home() {
  return (
    <div className=" bg-[#1B262C] h-screen w-full">
      <h1 className={`text-white text-center text-8xl ${mono.className}`}>Home</h1>  
    </div>
  )
  
}   
  export default Home
  // "text-white text-center text-8xl"