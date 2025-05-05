import React from 'react'
import Link from 'next/link'
import Social from './Social'
const Footer = () => {
  return (
    <div className='grid grid-cols-6 gap-6 my-4 mx-25'>
      <div className='col-span-4'>
        <h2 className='text-2xl'>Blog</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi atque, dicta qui odit nihil optio illum veniam, ex facere molestias veritatis asperiores porro eius! Reprehenderit nulla sunt perspiciatis numquam sapiente?
          Facere architecto laborum, id impedit optio molestiae error alias fuga soluta magnam quia quis cupiditate aut
        </p>
      </div>
      <div className='col-span-1 flex flex-col justify-center items-center'>
        <h3 className='font-bold m-3'>social</h3>
        <Social state='flex-col items-end' />

      </div>
      <div className='col-span-1 flex flex-col justify-center items-end'>
        <ol>

          <li className='font-bold my-1 text-xl' >links</li>
          <li>
            <Link href={"/"}>HomePage</Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/about"}> About</Link>
          </li>
          <li>
            <Link href={"/content"}>Content </Link>
          </li>
        </ol>
      </div>


    </div >
  )
}

export default Footer