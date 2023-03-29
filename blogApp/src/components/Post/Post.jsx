import React from 'react'
import CommentCreate from '../comment/CommentCreate'
import CommentList from '../comment/CommentList'

const Post = ({id, title}) => {
  return (
    <div className='post'>
        <div>{title}</div>
        <CommentCreate postId={id}/>
        <CommentList postId={id}/>
    </div>
  )
}

export default Post