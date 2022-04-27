import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import EditPostComponent from './components/EditPostComponent';
import PostsComponent from './components/PostsComponent';

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
            <h2>React Routing</h2>
            <Link to='/posts'>Posts</Link>
            <Routes>
                <Route path='/posts' element={ <PostsComponent posts={posts} editPost={editPost} />} />
                <Route path='/posts/:id' element={<EditPostComponent editPost={editAblePost} editChangeHandler={postChangeHandler} upDatePost={upDatePost} />} />
            </Routes>
        </div>
    )
}

export default App