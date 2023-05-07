import Link from 'next/link'
import React from 'react'

function Header() {
  return (
     <div className='bg-blue-500 text-center flex align-center justify-center font-bold p-5' >
     <Link href="/" class="rounded-lg bg-white text-blue-500 px-3 py-3  font-bold">
    Home
</Link>
    </div>
  )
}

export default Header