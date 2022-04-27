import React from 'react'

function EditPostComponent(props) {
    return (
        <form >
            <input type="text" name='title'
                value={props.editPost.title}
                onChange={(e) => props.editChangeHandler(e)}
            />
            <br />
            <input type="text" name='body'
                value={props.editPost.body}
                onChange={(e) => props.editChangeHandler(e)}
            />

            <button type='button' onClick={props.upDatePost}>Update</button>
        </form>
    )
}

export default EditPostComponent