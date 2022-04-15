import React, { useState } from 'react'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const handleClick = () => setMenu(!menu)

  return (
    <nav className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-5 md:px-12 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='font-bold text-cyan-600 font-sans mr-4 sm:text-2xl'>SuperSEOTools</h1>    
            </div>
            <ul className='hidden md:flex'>
                <li>SEO</li>
                <li>YouTube</li>
                <li>AI</li>
                <li>Text</li>
                <li>Discover</li>
                <li>Web Tools</li>
            </ul>
            <div className='md:hidden' onClick={handleClick}>
                <button data-collapse-toggle='mobile-menu-2' type='button' className='inline-flex duration-500 items-center p-2 ml-1 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='mobile-menu-2' aria-expanded='false'>
                    {!menu
                     ? <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd'></path></svg>
                     : <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>
                    }
                </button>
            </div>
        </div>
        
        <ul className={!menu ? 'hidden' : 'md:hidden absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>SEO</li>
            <li className='border-b-2 border-zinc-300 w-full'>YouTube</li>
            <li className='border-b-2 border-zinc-300 w-full'>AI</li>
            <li className='border-b-2 border-zinc-300 w-full'>Text</li>
            <li className='border-b-2 border-zinc-300 w-full'>Discover</li>
            <li className='border-b-2 border-zinc-300 w-full'>Web Tools</li>
        </ul>

    </nav>
  )
}

export default Header