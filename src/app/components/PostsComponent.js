import React from 'react'

function PostsComponent(props) {
    const postContent = props.posts.map((post, index) => {
        return (
            <div onClick={() => props.editPost(post)} key={index}>
                <h1>{post.id + " " + post.userId}</h1>
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