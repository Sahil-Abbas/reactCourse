import React from 'react'
import { Link } from 'react-router-dom'

function PostsComponent(props) {

    const postContent = props.posts.map((post, index) => {
        return (
            <div key={index}>
                <h1><Link to={`/posts/${post.id}`}>{post.id + " " + post.userId}</Link></h1>
                <small>{post.title}</small>
                <p>{post.body}</p>
            </div>
        )
    })

  return (
      <div>{ postContent }</div>
  )
}

export default PostsComponent