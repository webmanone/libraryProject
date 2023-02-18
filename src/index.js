import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

const libraryHeader = (
  <>
    <h1><span>Library</span></h1>
  </>
)

function Shelf() {
  const [bookCounter, setBookCounter] = useState(0);
  const [book, setBook] = useState({
    title: "title",
    author: "author"
  });
  
  const [showNewBook, setShowNewBook] = useState(false);
  const [books, setBooks] = useState([]);
 
  function updateBook(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  }

  function addBook(book) {
    setBookCounter(bookCounter + 1);
    setBooks([...books, book]);
    
  }

  function handleAddBookClick(e) {
    e.stopPropagation();
    addBook(book);
    setShowNewBook(false);
  }

  function handleCancelClick(e) {
    e.stopPropagation();
    setShowNewBook(false);
  }

  function handleShelfClick() {
    setShowNewBook(true);
  }

  function newBook() {
    if (showNewBook) {
      return (
        <div className="bookInput">
          <input type="text" name="title" value={book.title} onChange={updateBook} />
          <input type="text" name="author" value={book.author} onChange={updateBook} />
          <button onClick={handleAddBookClick}>Add Book</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div onClick={handleShelfClick} className="shelf">
      {newBook()}
      {books.map((book, index) => (
        <div key={index} className="book">
          {book.title} by {book.author}
        </div>
      ))}
    </div>
  );
}

function BookCase() {
  return (
    <div className="bookCase">
      <Shelf />
      <Shelf />
      <Shelf />
    </div>
  );
}

const container = (
  <>
    {libraryHeader}
    <BookCase />
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {container}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
