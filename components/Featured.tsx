import React from 'react'
import Image from 'next/image'
const Featured = () => {
    return (
        <div className='mb-6'>
            <h1 className='text-4xl font-bold text-center mt-10'>
                Ideas take shape. Words flow. Minds meet. Meaning grows
            </h1>
            <div className='flex items-center justify-center flex-col md:flex-row gap-10 mt-10'>
                <Image src="/p1.jpeg" alt="featured" width={1000} height={10} className='mx-auto mt-10 object-cover h-[300px]' />
                <div>
                    <h2 className='text-2xl font-bold'>Words That Matter – A Space to Reflect and Inspire</h2>
                    <p className='text-xl'>A space where thoughts turn into meaningful stories.
                        We write to reflect, connect, and inspire minds.
                        Join the journey — words matter, and so do you.</p>
                    <button> Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured