import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

//variable that contains the header/title
const libraryHeader = (
  <>
    <h1><span>Library</span></h1>
  </>
)

//shelf component. all the functions inside occur within each specific shelf
function Shelf() {
  const [bookCounter, setBookCounter] = useState(0); //initialises hook to 0 that will track how many books are in a shelf

  const [book, setBook] = useState({
    title: "title",
    author: "author"
  }); //initialises hook that will track the latest book entered by the user
  
  const [showInput, setShowInput] = useState(false); //initialises status of the book input div, automatically false

  const [books, setBooks] = useState([]); //initialises array that will hold each book in the shelf
 
  //function that changes the state of book to what the user has inputted. ... makes a copy of the object, e.target.name takes the value of the input name, (title and author) and updates the value
  function updateBook(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  }

  //function that adds what's currently stored in the book object to the books array
  function addBook(book) {
    if (bookCounter < 17) {
    setBookCounter(bookCounter + 1);
    setBooks([...books, book]);
    }
  }

  //function that calls the addBook function when the add button is clicked
  function handleAddBookClick(e) {
    e.stopPropagation();
    addBook(book);
  }

  //function that hides the input div when the cancel button is clicked
  function handleCancelClick(e) {
    e.stopPropagation();
    setShowInput(false);
  }

  //functino that shows the input div when the shelf is clicked.
  function handleShelfClick() {
    setShowInput(true);
  }

  //function that shows the input div when showInput is true
  function bookInput() {
    if (showInput) {
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

  //return statement for the shelf component. map function included to loop through the books array and make sure the shelf contains the updated list of books
  return (
    <div onClick={handleShelfClick} className="shelfContainer">
      {bookInput()}
    <div className="shelf">
      {books.map((book, index) => (
        <div key={index} className="book">
          {book.title} - {book.author}
        </div>
      ))}
    </div>
   </div>
  );
}

//component that returns the bookcase, which contains all the shelves
function BookCase() {
  return (
    <div className="bookCase">
      <Shelf />
      <Shelf />
      <Shelf />
    </div>
  );
}

//container for the whole web page
const container = (
  <>
    {libraryHeader}
    <BookCase />
  </>
)

//renders the container in react
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
