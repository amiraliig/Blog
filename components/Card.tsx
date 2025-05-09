import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export interface PostType {
    id: number;
    title: string;
    slug: string;
    author: number;
    publish: string;
    status?: string
    description: string;
}
interface Props {
    Props: PostType
}
function Card({ Props }: Props) {
    const summary = Props.description.slice(0, 100)
    return (
        <Link href={`/blog/lorem`}>  <div className='sm:grid sm:grid-cols-2 mt-5 justify-center items-center flex flex-col'>
            <Image src={"/p1.jpeg"} alt='image' height={200} width={200} className='h-60 w-80 object-cover' />
            <div className='flex flex-col gap-3'>
                <span className='flex justify-between '>
                    <h5 className='text-slate-500 font-thin'>{Props.author}</h5>
                    <h5 className='text-red-300'></h5>
                </span>
                <h4 className='text-xl font-bold'>
                    {Props.title}
                </h4>
                <p>

                    {summary || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, rerum. Modi hic odio suscipit nihil quod labore debitis impedit nam temporibus esse. Error earum quis adipisci rerum. Explicabo, autem consequuntur."}...
                </p>
                <button className='bg-slate-200 px-3 py-1 rounded-xl w-30 dark:text-black'>
                    Read More
                </button>

            </div>
        </div></Link>
    )
}

export default Card