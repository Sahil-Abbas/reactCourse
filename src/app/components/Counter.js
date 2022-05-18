import React, { useReducer, useState } from 'react'
import { Button } from 'react-bootstrap';

const initialState = {
    name: '',
    isNameValid: true,
    email: '',
    isEmailValid: true
};

const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'name':
            if (action.value.name.length > 10) {
                return {...state, name: action.value.name, isNameValid: false}
            }
            return {...state, name: action.value.name, isNameValid: true}

        case 'email':
            return {...state, count: state.count - 1};

        default:
            break;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);


    // same above case with useState
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);


    const changeHandler = (e) => {
        dispatch({
            type: e.target.name,
            value: { [e.target.name]: e.target.value }
        })
    }

    const changeHandler2 = (e) => {
        if (e.target.value.length > 10) {
            setName(e.target.value);
            setIsNameValid(false);
            console.log(e.target.value.length)
        } else {   
            setName(e.target.value);
            setIsNameValid(true);
        }
    }

    // const increment = () => {
    //     dispatch({type: 'increment'})
    // }

    // const decrement = () => {
    //     dispatch({type: 'decrement'})
    // }
    console.log(isNameValid)
  return (
      <div>
          <h1>with useReducer</h1>

          {/* <Button style={{display: 'block', margin: '0 auto'}} onClick={increment}>Add</Button>
          <Button style={{display: 'block', margin: '0 auto'}} onClick={decrement}>Sub</Button> */}

          <input type="text" name='name' onChange={(e) => changeHandler(e)} value={state.name} />
          {!state.isNameValid && <p>invalid name</p>}
          {/* <input type="text" name='email' /> */}

          <br />
          <h1>with useState</h1>
          <input type="text" name='name2' onChange={(e) => changeHandler2(e)} value={name} />
          {!isNameValid && <p>invalid name</p>}
      </div>

  )
}

export default Counter