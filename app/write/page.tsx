"use client"
import Uploader from '@/components/Uploader'
import WritInput from '@/components/WritInput'
import React from 'react'
const page = () => {
    return (
        <div>
            <input type="text" placeholder='Title' className='outline-none text-5xl my-7' />
            <Uploader />
            <WritInput />

        </div>
    )
}

export default page