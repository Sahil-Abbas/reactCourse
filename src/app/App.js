import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import EditPostComponent from './components/EditPostComponent';
import PostsComponent from './components/PostsComponent';

function App() {
    const [posts, setPost] = useState([]);

    // componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: "GET"
            })
            
            .then((data) => data.json())

            .then((response) => {
                setPost(response)
            }).catch((err) => {
                console.log(err)
            })
        // componentWillUnMount
        // componentDidUpdate
    }, [])

    return (
        <div className='App'>
            <h2>React Routing</h2>
            <Link to='/posts'>Posts</Link>
            <Routes>

                <Route path='/posts' element={
                    <PostsComponent posts={posts} />
                } />

                <Route path='/posts/:id' element={
                    <EditPostComponent />
                } />
            </Routes>
        </div>
    )
}

export default App