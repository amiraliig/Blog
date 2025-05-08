"use client"
import React from 'react'
import { login } from '@/lib/actions/auth'
const SignInButton = () => {
    return (
        <div>
            <div className='bg-gray-900 w-1/2 rounded-2xl py-6 text-center cursor-pointer m-8' onClick={() => login()}>Sign in with Github</div>

        </div>
    )
}

export default SignInButton