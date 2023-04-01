import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({postId}) => {
  const [content, setContent] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(content)
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {content})
    setContent("")
  };
  return (
    <div className="commentCreate">
      <h1>Create comment</h1>
      <h4>content</h4>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="please input"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
