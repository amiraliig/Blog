
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from './AuthLinks'
import Burger from './Burger'
import Them from './Them'
import { useState } from 'react'
import ThemeToggle from '@/theme/theme-toggle'
import Social from './Social'
const Navbar = () => {

    return (
        <div className='flex justify-around md:mx-24 mx-6 mt-6 '>
            <div className='md:flex gap-1 flex-1 hidden'>
                <Social state='flex-row'/>

            </div>
            <div className='font-bold text-xl flex-1 text-center'> Blog</div>
            <div className='text-lg flex gap-4  flex-1 align-center items-center justify-between' >
                <ThemeToggle />
                <div className='md:flex hidden gap-4'>
                    <Link href={"/"}>Homepage</Link>
                    <Link href={"/"}>Contact</Link>
                    <Link href={"/"}>About</Link>
                </div>
                <AuthLinks />
                <Burger />
            </div>

        </div>
    )
}

export default Navbar