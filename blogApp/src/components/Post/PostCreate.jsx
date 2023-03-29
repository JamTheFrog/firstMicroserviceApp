import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/posts', {title})
    setTitle("")
  };
  return (
    <div>
      <h1>CREATE POST</h1>
      <h4>Title</h4>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="please input"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
