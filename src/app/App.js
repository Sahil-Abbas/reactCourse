import React, { useEffect, useState } from 'react';
import BookComponent from './components/BookComponent';
import './App.css';

const books = ['English', 'Urdu', 'Math', 'Chemistry'];

function App() {
    const [book, setBook] = useState(books);
    const [enteredBook, setEnteredBook] = useState('Physics');
    const [toggle, setToggle] = useState(true);

    const addBookHandler = () => {
        setBook([...book, enteredBook])
    }

    // componentDidMount
    // useEffect(() => {
    //     setTimeout(() => {
    //         setBook([...book, 'new book'])
    //     }, 1000);

    //     // componentWillUnMount
    //     // componentDidUpdate
    // }, [book])

    const content = book.map((element, i) => {
        return <BookComponent book={element} key={i} />
    })

  return (
      <div className='App'>
          <button onClick={addBookHandler}>Add Book</button>
          <button onClick={() => setToggle(!toggle)}>Hide/Show</button>
          <input onChange={(e) => setEnteredBook(e.target.value)} value={enteredBook} type="text" />
          {toggle && content}
      </div>
  )
}

export default App