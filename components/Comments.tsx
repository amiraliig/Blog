import React from 'react'
import Comment from './Comment';
export interface CommentsType {
    name: string;
    comment: string;
    date: string;
    image: string;
}
interface Props {
    Comments: CommentsType[]
}
const Comments = ({ Comments }: Props) => {
    return (
        <div>
            {
                Comments.map((comment) => {
                    return <React.Fragment key={comment.name}><Comment Props={comment} /></React.Fragment>
                })
            }
        </div>
    )
}

export default Comments