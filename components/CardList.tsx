import React from 'react'
import Card from './Card'
const CardList = () => {
  return (
    <div>
      <h3 className='text-2xl font-bold'>
        Recent Post
      </h3>
      <div className='gap-3 flex flex-col' >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> 
        
      </div>

    </div>
  )
}

export default CardList