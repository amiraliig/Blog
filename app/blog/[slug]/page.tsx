import React from 'react'
interface Params {
    slug?: string
}
interface Props {
    params: Params
}
const page = ({ params }: Props) => {
    const param: string | undefined = params.slug
    return (
        <div>{param}</div>
    )
}

export default page