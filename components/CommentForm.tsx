import React from 'react'
import Link from 'next/link'
import { auth } from '@/auth'

const CommentsForm = async () => {


    const session = await auth()

    return (
        <div className='mt-4'>
            <h1 className='text-2xl font-bold mb-4'>Comments</h1>

            {session?.user ? (
                <form className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
                    <textarea
                        name="comment"
                        placeholder='Write your comment'
                        className='w-full lg:w-4/5 outline-none border-2 rounded-xl border-orange-400 min-h-40 p-2'
                    ></textarea>
                    <button
                        type="submit"
                        className='w-full lg:w-1/6 h-12 border-2 border-orange-400 rounded-xl text-xs lg:text-xl text-center'
                    >
                        Send
                    </button>
                </form>
            ) : (
                <div>Please <Link href={`/login`} className='text-orange-400'>login...</Link> to write a comment. </div>
            )}
        </div>
    )
}

export default CommentsForm
