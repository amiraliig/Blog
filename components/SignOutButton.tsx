"use client"
import React from 'react'
import { logout } from '@/lib/actions/auth'
const SignOutButton = () => {
    return (
        <div>
            <div className='bg-amber-500 rounded-xl px-1' onClick={() => logout()}>logOut</div>

        </div>
    )
}

export default SignOutButton