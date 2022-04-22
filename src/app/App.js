import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [posts, setPost] = useState([]);
    const [editAblePost, setEditAblePost] = useState({});
    const [toggle, setToggle] = useState(false);

    // componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            
            .then((data) => data.json())

            .then((response) => {
                setPost(response)
            }).catch((err) => {
                console.log(err)
            })
        // componentWillUnMount
        // componentDidUpdate
    }, [])

    const editPost = (post) => {
        setToggle(true);
        setEditAblePost(post)
    }

    const postChangeHandler = (e) => {
        setEditAblePost((prevState) => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    const upDatePost = () => {
        setPost((prevPost) => {
            const updatedPost = [...prevPost];
            updatedPost[editAblePost.id - 1] = editAblePost
            return updatedPost
        })
        setToggle(false);
    }

    return (
        <div className='App'>
            {toggle && <form >
                <input type="text" name='title'
                    value={editAblePost.title}
                    onChange={(e) => postChangeHandler(e)}
                />
                <br />
                <input type="text" name='body'
                    value={editAblePost.body}
                    onChange={(e) => postChangeHandler(e)}
                />

                <button type='button' onClick={upDatePost}>Update</button>
            </form>}
            {
                posts.map((post, index) => {
                    return (
                        <div onClick={() => editPost(post)} key={index}>
                            <h1>{post.id + " " + post.userId}</h1>
                            <small>{post.title}</small>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default App