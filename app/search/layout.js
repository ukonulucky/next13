
import '../globals.css'
import { Inter } from 'next/font/google'

import Search from './search'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Search Field',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex space-x-2">
      
       <div className="">
     <h1>Search field</h1>
       </div>
       <div className="">
       <Search />
       {children}
        </div>
       
      </main>
        </body>
    </html>
  )
}
