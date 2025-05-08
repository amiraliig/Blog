import React from 'react'
import Image from 'next/image'
import Menu from '@/components/Menu'
import CommentsForm from '@/components/CommentForm'
import Comments from '@/components/Comments'
import { CommentsType } from '@/components/Comments'

const commentsData: CommentsType[] = [
    {
        name: "Eliott",
        comment: "Really nice design, thanks for your hard work!",
        date: "2025-05-06",
        image: "https://example.com/avatar1.jpg"
    },
    {
        name: "Sarah",
        comment: "I wish there was a reply feature for the comments.",
        date: "2025-05-05",
        image: "https://example.com/avatar2.jpg"
    },
    {
        name: "Reza",
        comment: "Loading speed is great 👌",
        date: "2025-05-04",
        image: "https://example.com/avatar3.jpg"
    }
];
interface Params {
    slug?: string
}
interface Props {
    params: Params
}
const page = ({ params }: Props) => {
    const param: string | undefined = params.slug
    return (
        <div  >
            <header className='grid grid-cols-8 gap-3'>
                <div className='col-span-4 flex flex-col justify-between'>
                    <h1 className='text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quis cum ducimus.</h1>
                    <div className='flex gap-5 my-4 items-center'>
                        <Image src={"/p1.jpeg"} alt='iamge' height={50} width={50} className='rounded-full h-12  ' />
                        <div className=' '>
                            <span className='dark:bg-slate-600 bg-slate-300 px-2 rounded-lg'>travel</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.  </p>
                            <div className='flex justify-between '>
                                <span className='text-sm text-slate-500 '>john doe</span>
                                <span className='text-sm'>2020</span>
                            </div>
                        </div>
                    </div>

                </div>

                <Image src={"/p1.jpeg"} width={500} height={500} alt='image' className='col-span-4 object-cover rounded-2xl w-full h-[300px]' />
            </header>
            <main className='grid grid-cols-3 gap-8 mt-8'>
                <div className='col-span-3 lg:col-span-2'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti harum itaque autem nisi voluptate magnam, provident aperiam deleniti nemo nesciunt doloribus non molestiae perspiciatis facere dicta eaque a, recusandae molestias!
                        Aliquam soluta harum animi commodi! Culpa quaerat quam, cupiditate amet id eius! Quos, possimus non? Reiciendis vero nihil, provident ullam neque nesciunt excepturi eaque qui molestiae odit nemo officiis quo.
                        Fugiat dolorum, deleniti fugit aliquid qui animi a vero hic possimus, at atque quisquam veniam laboriosam, consectetur dignissimos esse fuga natus suscipit. Ullam perspiciatis reiciendis quo quia unde? Eius, aperiam!
                        Corporis laboriosam eligendi exercitationem? Aperiam nisi dignissimos labore eos cum quos autem debitis neque ipsa nemo beatae quasi id necessitatibus sunt voluptates numquam qui vero recusandae blanditiis facere, a maiores.
                        Nesciunt deleniti cupiditate iste quae quos nobis earum officia ducimus harum, illum sed facere, obcaecati voluptatibus cum quisquam quis dicta, veritatis eligendi blanditiis veniam sunt suscipit? Impedit modi dicta aperiam?
                        Sit excepturi neque repellat? Corporis tenetur dolore et consectetur provident quae ex soluta aut dolorem recusandae, fugit, minima obcaecati, necessitatibus in possimus. Accusamus vitae velit assumenda recusandae nisi labore! Cum.
                        Fugiat labore provident ipsa sint, consequuntur iusto! Provident enim officiis ab, atque beatae velit repellendus possimus officia quo cupiditate non exercitationem fuga sunt at nostrum quasi aliquam a dignissimos eum.
                        Eveniet nulla provident natus alias fuga. Dolores iure nulla quis fuga repellendus expedita repellat in maiores facere unde fugiat soluta, sint officiis nihil impedit sed reprehenderit amet autem fugit excepturi.
                    </p>
                    <div>
                        <CommentsForm />
                        <Comments Comments={commentsData} />
                    </div>
                </div>
                <div className='col-span-1 hidden lg:block '>
                    < Menu />
                </div>
            </main>
        </div>
    )
}

export default page