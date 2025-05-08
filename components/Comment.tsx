import React from 'react'
import { CommentsType } from './Comments'
import Image from 'next/image'
interface Props {
  Props: CommentsType
}

const Comment = ({ Props }: Props) => {
  return (
    <div>
      <div className='flex gap-5 my-4 items-center'>
        <Image src={"/p1.jpeg"} alt='iamge' height={50} width={50} className='rounded-full h-12  ' />



        <div className='flex justify-between w-1/3'>
          <span className='text-sm text-slate-500 '>{Props.name}</span>
          <span className='text-sm'>{Props.date}</span>
        </div>

      </div>
      <p>
        {Props.comment}
      </p>
    </div>
  )
}

export default Comment