import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-5 bg-blue-400 shadow md:flex md:items-center md:justify-between'>
        <div>
            <span className='text-2xl text-white cursor-pointer'>Rokuone</span>
        </div>

        <ul>
            <li>
                <a href="#" className='text-xl hover:text-white duration-200'>HOME</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar