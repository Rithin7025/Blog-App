import React from 'react'

import { Button, Navbar, NavbarToggle, TextInput, Textarea } from "flowbite-react";
import { Form, Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";


function Header() {
  return (
    <div>

    <Navbar className='border-b-2'>
    <Link to="/" className='text-white font-semibold cursor-pointer text-base md:text-sm dark:text-white'>
    <span className='px-2 md:px-4 py-2 rounded-md bg-gradient-to-r from-pink-700 via-purple-600 to-blue-500 shadow-md'>Blogify</span>
      </Link>
    <form action="">
      <TextInput type='text' className='hidden lg:inline' placeholder='search' rightIcon={CiSearch} />
    </form>
    <Button color='gray' className='lg:hidden w-12 h-10' pill>
      <CiSearch />
    </Button>

{/* we need this div in the larger screen at the end and in smaller before the hamburger menu (so use order-2) */}
    <div  className='flex gap-2 md:order-2 items-center'>
      <Button color='gray' className='w-12 h-10 hidden sm:inline' pill>
      <IoIosMoon  />
      </Button>
      <Link to={'/login'}>
      <Button outline gradientDuoTone="greenToBlue">
        Login
      </Button>
      </Link>
    <NavbarToggle />
    </div>
      {/* Menu  */}

      <Navbar.Collapse >
      <Navbar.Link >
        <Link to={'/'}>
        Home
        </Link>
        </Navbar.Link>  
      <Navbar.Link >
        <Link to={'/'}>
        Topics
        </Link>
        </Navbar.Link>
      <Navbar.Link >
        <Link to={'/'}>
        About
        </Link>
        </Navbar.Link>
      </Navbar.Collapse>
  </Navbar>
    </div>
  )
}

export default Header