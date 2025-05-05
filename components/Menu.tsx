import React from 'react'
import Image from 'next/image';
interface Data {
  cat: string;
  editor: string;
  date: number;
  title: string;
}
const Menu = () => {
  const data: Data[] = [{ cat: "Travel", editor: "John Doe", date: 2020, title: "Lorem, ipsum dolor sit amet consectetur adipisicing." },
  { cat: "Travel", editor: "John Doe", date: 2020, title: "Lorem, ipsum dolor sit amet consectetur adipisicing." },
  { cat: "Travel", editor: "John Doe", date: 2020, title: "Lorem, ipsum dolor sit amet consectetur adipisicing." },
  { cat: "Travel", editor: "John Doe", date: 2020, title: "Lorem, ipsum dolor sit amet consectetur adipisicing." }]
  return (
    <div>
      <div>
        <span className='text-lg text-slate-400'>Whats hot</span>
        <h3 className='text-2xl font-bold'>Most Popular</h3>
        {data.map((item, index) => {
          return <div className='my-7' key={index}>
            <h5 className='dark:bg-slate-600 bg-slate-300 dark: text-white py-1 px-2 rounded-xl w-15 text-black'>{item.cat}</h5>
            <p>{item.title}</p>
            <div className='flex gap-2'>
              <span className='text-sm'>
                {item.editor}
              </span>
              <span className='text-sm text-slate-400'>
                {item.date}
              </span>

            </div>
          </div>
        })}
      </div>
      <div className='my-9'>
        <span className='text-slate-500 '>Discover by topic</span>
        <h3 className='text-2xl font-bold my-5'>Categories</h3>
        <div className='grid grid-cols-3 gap-3'>
          <div className='dark:bg-slate-600 bg-slate-300  rounded-xl text-center p-1 '>
            Style
          </div>
          <div className='dark:bg-slate-600 bg-slate-300 rounded-xl text-center p-1 '>
            Style
          </div>  <div className='dark:bg-slate-600 bg-slate-300 rounded-xl text-center p-1 '>
            Style
          </div>  <div className='dark:bg-slate-600 bg-slate-300 rounded-xl text-center p-1 '>
            Style
          </div>  <div className='dark:bg-slate-600 bg-slate-300 rounded-xl text-center p-1 '>
            Style
          </div>  <div className='dark:bg-slate-600 bg-slate-300 rounded-xl text-center p-1 '>
            Style
          </div>
        </div>
      </div>
      <div>
        <span className='text-slate-500'>Chosen by editor</span>
        <h1 className='text-2xl font-bold my-3'>Editor Pick</h1>
        <div className='m-3'>
          {[1, 2, 3, 4, 5].map((item) => {
            return <div key={item} className='grid grid-cols-4 gap-5 my-4 items-center'>
              <Image src={"/p1.jpeg"} alt='iamge' height={50} width={50} className='rounded-full h-12  ' />
              <div className='col-span-3 '>
                <span className='dark:bg-slate-600 bg-slate-300 px-2 rounded-lg'>travel</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.  </p>
                <div className='flex justify-between '>
                  <span className='text-sm text-slate-500 '>john doe</span>
                  <span className='text-sm'>2020</span>
                </div>
              </div>
            </div>
          })}
        </div>


      </div>
    </div>
  )
}

export default Menu