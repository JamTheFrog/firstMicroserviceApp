import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Comment from './Comment.jsx'


const CommentList = ({postId}) => {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComments(res.data)
    }

    useEffect(() => {
        fetchComments()
    }, [])

  return (
    <div className='commentList'>{comments.map(comment => {
        console.log(comment)
        return <div>
            <Comment id={comment.id} key={comment.id} content={comment.content}/>
        </div>
    })
}</div>
  )
}

export default CommentList