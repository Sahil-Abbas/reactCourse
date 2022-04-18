import React, { useState } from 'react';
import BookComponent from './components/BookComponent';
import './App.css';

const books = ['English', 'Urdu', 'Math', 'Chemistry'];

function App() {
    const [book, setBook] = useState(books);
    const [enteredBook, setEnteredBook] = useState('Physics');

    const addBookHandler = () => {
        setBook([...book, enteredBook])
    }

    const content = book.map((element, i) => {
        return <BookComponent book={element} addABook={addBookHandler} key={i} />
    })

  return (
      <div className='App'>
          <button onClick={addBookHandler}>Add Book</button>
          <input onChange={(e) => setEnteredBook(e.target.value)} value={enteredBook} type="text" />
          {content}
      </div>
  )
}

export default App