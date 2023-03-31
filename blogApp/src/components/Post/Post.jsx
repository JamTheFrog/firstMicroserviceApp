import React from 'react'
import CommentCreate from '../comment/CommentCreate'
import CommentList from '../comment/CommentList'

const Post = ({comments, title, id}) => {
  return (
    <div className='post'>
        <div>{title}</div>
        <CommentCreate postId={id}/>
        <CommentList comments={comments}/>
    </div>
  )
}

export default Post