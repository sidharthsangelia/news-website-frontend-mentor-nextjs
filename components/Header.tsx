import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex space-x-8 items-center pt-8 pb-2 h-[14vh]  '>
        <div className='flex w-[30%]'>
            <Link className='text-6xl font-extrabold' href="/">W.</Link>
        </div>
        <div className='w-[70%] flex justify-end space-x-14'>
        <Link  className='hover:text-amber-500 transition-colors' href="/">Home</Link>
        <Link  className='hover:text-amber-500 transition-colors' href="/">News</Link>
        <Link className='hover:text-amber-500 transition-colors'  href="/">Popular</Link>
        <Link  className='hover:text-amber-500 transition-colors' href="/">Trending</Link>
        <Link className='hover:text-amber-500 transition-colors'  href="/">Categories</Link>
        </div>
    </header>
  )
}

export default Header