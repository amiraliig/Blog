import CardList from '@/components/CardList'
import Menu from '@/components/Menu'
import React from 'react'
interface SearchParams {
    cat?: string
}
interface PageProp {
    searchParams: SearchParams
}
function page({ searchParams }: PageProp) {
    const cat = searchParams.cat
    return (
        <div>
            <h1 className='bg-orange-400 text-black text-center text-2xl my-5'>
                {cat}
            </h1>
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-3 lg:col-span-2"> <CardList /></div>
                <div className="col-span-1 hidden lg:block"> <Menu /></div>
            </div>

        </div>
    )
}

export default page