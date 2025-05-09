import React from 'react'
import Card from './Card'
import { PostType } from './Card'

const CardList = async () => {
  const data = await fetch("http://127.0.0.1:8000/api/posts/")
  const newData: PostType[] = await data.json()
  return (
    <div>
      <h3 className='text-2xl font-bold'>
        Recent Post
      </h3>
      <div className='gap-3 flex flex-col' >
        {
          newData.map((post) => {
            return <React.Fragment key={post.id}><Card Props={post} /></React.Fragment>
          })

        }

      </div>

    </div>
  )
}

export default CardList