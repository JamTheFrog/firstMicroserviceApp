import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import "./post.css"

const PostList = () => {
    const [posts, setPosts] = useState({})

    const fetchPosts = async () => {
        await axios.get("http://localhost:4002/posts").then(res => setPosts(res.data)).catch(err => console.log(err))
        
    }

    useEffect(() => {
        fetchPosts()
    }, [])


  return (
    <div className='postList'>{Object.values(posts).map(post => {
      return <Post id={post.id} comments={post.comments} key={post.id} title={post.title}/>})}</div>
  )
}

export default PostList