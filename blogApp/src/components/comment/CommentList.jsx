import Comment from './Comment.jsx'


const CommentList = ({comments}) => {
  console.log(comments)
  return (
    <div className='commentList'>{comments.map(comment => {
        console.log(comment)
        return <Comment id={comment.id} key={comment.id} content={comment.content}/>
        
    })
}</div>
  )
}

export default CommentList