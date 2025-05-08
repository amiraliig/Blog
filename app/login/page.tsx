"use server"


import { auth } from '@/auth'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import React from 'react'

const page = async () => {
    const session = await auth()
    return (
        <div className=' flex justify-center text-white  '>
            <div className='w-[500px] border-amber-500 border-2 rounded-2xl flex justify-center items-center flex-col gap-15 '>
                <div className='bg-red-500  w-1/2 rounded-2xl py-6 text-center cursor-pointer m-8'>Sign in with Gmail</div>
                <SignInButton />
                <div className='bg-blue-500  w-1/2 rounded-2xl py-6 text-center cursor-pointer m-8'>Sign in with  Meta</div>
            </div>

        </div>
    )
}

export default page