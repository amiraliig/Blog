"use client"
import Link from 'next/link';
import { useState } from 'react'
import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
function Burger() {
    const [open, setOpen] = useState(false)
    return (
        <div className='text-2xl  sm:hidden flex' >
            {!open ? <IoReorderThreeOutline onClick={() => {
                setOpen(!open)
            }} /> : <IoIosClose onClick={() => {
                setOpen(!open)
            }} />}
            {open && <div className='text-lg absolute top-[80px] flex flex-col text-white z-10 right-[0px] bg-black h-full justify-center  w-[100vw]  items-center'>
                <Link href={"/"}>Homepage</Link>
                <Link href={"/"}>Contact</Link>
                <Link href={"/"}>About</Link> </div>}
        </div   >
    )
}

export default Burger