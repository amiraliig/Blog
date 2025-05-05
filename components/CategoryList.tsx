import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const catogry = [
    { name: "Style", image: "/style.png" },
    { name: "Fashion", image: "/fashion.png" },
    { name: "Food", image: "/food.png" },
    { name: "Travel", image: "/travel.png" },
    { name: "Culture", image: "/culture.png" },
    { name: "Coding", image: "/coding.png" },


]
const CategoryList = () => {
    return (
        <div className='grid lg:grid-cols-6 grid-cols-3 justify-between mb-10'>
            {catogry.map((item) => {
                return <React.Fragment key={item.name}>
                    <Link href={`/blog?cat=${item.name}`}>
                        <div className='flex flex-col items-center justify-center rounded-2xl' key={item.name}>
                            <Image src={item.image} alt="catogro" width={100} height={100} className='mx-auto mt-10 object-cover md:size-[100px] size-[80px]  rounded-full' />
                            <h1 className='text-xl font-bold'>{item.name}</h1>
                        </div></Link>
                </ React.Fragment>
            })}
        </div>
    )
}

export default CategoryList