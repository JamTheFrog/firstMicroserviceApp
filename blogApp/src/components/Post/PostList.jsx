import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'
import "./post.css"

const PostList = () => {
    const [posts, setPosts] = useState({})

    const fetchPosts = async () => {
        await axios.get("http://localhost:4000/posts").then(res => setPosts(res.data)).catch(err => console.log(err))
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map(post => {
        return <Post id={post.id} key={post.id} title={post.title}/>
        
    })

  return (
    <div className='postList'>{renderedPosts}</div>
  )
}

export default PostList