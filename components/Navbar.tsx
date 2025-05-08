
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from './AuthLinks'
import Burger from './Burger'
import Them from './Them'
import { useState } from 'react'
import ThemeToggle from '@/theme/theme-toggle'
import Social from './Social'
import { auth } from '@/auth'
import SignOutButton from './SignOutButton'
const Navbar = async () => {
    const session = await auth()
    return (
        <div className='flex justify-around md:mx-24 mx-6 mt-6 '>
            <div className='md:flex gap-1 flex-1 hidden'>
                <Social state='flex-row' />

            </div>
            <div className='font-bold text-xl flex-1 text-center'> Blog</div>
            <div className='text-lg flex gap-4  flex-1 align-center items-center justify-between' >
                <ThemeToggle />
                <div className='md:flex hidden gap-4'>
                    <Link href={"/"}>Homepage</Link>
                    <Link href={"/"}>Contact</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={'/blog'}>Blogs</Link>
                    {session?.user ? (<h3>{session?.user.name} </h3>) : (<AuthLinks />)}
                    {session?.user ? (<SignOutButton />) : null}

                </div>


                <Burger />
            </div>

        </div>
    )
}

export default Navbar