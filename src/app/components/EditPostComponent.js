import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function EditPostComponent(props) {

    const [singlePost, setSinglePost] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

     // componentDidMount
     useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            
            .then((data) => data.json())

            .then((response) => {
                setSinglePost(response);
                setIsLoading(false);
            }).catch((err) => {
                console.log(err)
            })
        console.log(params)
        // componentWillUnMount
        // componentDidUpdate
     }, [])
    
     useEffect(() => {
         fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`,
             {
             method: 'PUT'
         })
            
            .then((data) => data.json())

            .then((response) => {
                setSinglePost(response);
                setIsLoading(false);
            }).catch((err) => {
                console.log(err)
            })
        console.log(params)
        // componentWillUnMount
        // componentDidUpdate
     }, [])
    
     useEffect(() => {
         console.log(singlePost);
     })
     
    
     const editChangeHandler = (e) => {
         setSinglePost({
             ...singlePost,
            [e.target.name]: e.target.value
        })
    }

    const upDatePost = () => {

    }
    
    return (
        <form >
            <input type="text" name='title'
                value={singlePost.title}
                onChange={(e) => editChangeHandler(e)}
            />
            <br />
            <input type="text" name='body'
                value={singlePost.body}
                onChange={(e) => editChangeHandler(e)}
            />

            <button type='button' onClick={upDatePost}>Update</button>
        </form>
    )
}

export default EditPostComponent