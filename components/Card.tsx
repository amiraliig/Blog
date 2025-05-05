import React from 'react'
import Image from 'next/image'
function Card() {
    return (
        <div className='sm:grid sm:grid-cols-2 mt-5 justify-center items-center flex flex-col'>
            <Image src={"/p1.jpeg"} alt='image' height={200} width={200} className='h-60 w-80 object-cover' />
            <div className='flex flex-col gap-3'>
                <span className='flex justify-between '>
                    <h5 className='text-slate-500 font-thin'>11.2.2020</h5>
                    <h5 className='text-red-300'>Culcure</h5>
                </span>
                <h4 className='text-xl font-bold'>
                    Lorem ipsum dolor sit.
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id saepe magnam porro reprehenderit eaque, incidunt tempore officia laudantium esse?
                </p>
                <button className='bg-slate-200 px-3 py-1 rounded-xl w-30 dark:text-black'>
                    Read More
                </button>

            </div>
        </div>
    )
}

export default Card