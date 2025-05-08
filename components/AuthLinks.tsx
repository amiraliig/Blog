import Link from 'next/link'
import React from 'react'

type authStatus = string

const AuthLinks = () => {
    let currentAuthStatus: authStatus = "authenticated"

    if (currentAuthStatus == "authenticated") {
        return (
            <>
                <Link href="/login" className='bg-amber-500 px-3  rounded-xl'>Login</Link>

            </>
        )
    } else {
        return <Link href="/">Login</Link>
    }
}

export default AuthLinks
