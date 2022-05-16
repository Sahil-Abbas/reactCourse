import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import LoginComponent from './components/LoginComponent';
import MenuComponent from './components/MenuComponent';
import OrderComponent from './components/OrderComponent';
import OrderDetail from './components/OrderDetail';

function App() {
    const [posts, setPost] = useState([]);

    // componentDidMount
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts',
    //         {
    //             method: "GET"
    //         })

    //         .then((data) => data.json())

    //         .then((response) => {
    //             setPost(response)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    //     // componentWillUnMount
    //     // componentDidUpdate
    // }, [])

    return (
        <div className='App'>
            <HeaderComponent />
            <Routes>
                <Route path='/' element={<div>Home</div>} />
                <Route path='/menu' element={<MenuComponent />} />
                <Route path='/orders' element={<OrderComponent />}>
                    <Route index={true} element={<div>Select order</div>} />
                    <Route path=':id' element={<OrderDetail />} />
                </Route>
                <Route path='/login' element={<LoginComponent />} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </div>
    )
}

export default App