import Menu from '@/components/Menu'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proyecto',
  description: 'Proyecto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-row bg-[#1B262C] '>
          <Menu />
          {children}
        </div>
        </body>
    </html>
  )
}
