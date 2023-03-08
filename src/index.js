import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Shelf from  './shelf.js';


//variable that contains the header/title
const libraryHeader = (
  <>
    <h1><span>Library</span></h1>
  </>
)

//component that returns the bookcase, which contains all the shelves
function BookCase() {

const [showBook, setShowBook] = useState(false); //initialises status of the book input div, automatically false

const [selectedBook, setSelectedBook] = useState(null); //initialises which book has been clicked

 //function that opens the book when a book on the shelf is clicked
 function handleBookClick(e, book) {
  e.stopPropagation();
  setSelectedBook(book);
  setShowBook(true);
  //setShowInput(false);
}

//function that hides the open book
function handleCancelPages(e) {
  e.stopPropagation();
  setShowBook(false);
}

//function that shows the book
function bookPages(){
  if (showBook) {
    return (

<div className="bigBook">
  <div className="back"><button className="closePages" onClick={handleCancelPages}>&times;</button></div>
  <div className="page6"></div>
  <div className="page5"></div>
  <div className="page4"></div>
  <div className="page3"></div>
  <div className="page2"></div>
  <div className="page1"></div>
  <div className="front"><div className='bookTitle'>{selectedBook.title}</div> <br /><div> by </div><br /> <div className='bookAuthor'>{selectedBook.author}</div></div>
</div>

    )
  }  else {
    return null;
  }
}

  return (
    <div className="bookCase">
      <Shelf onBookClick={handleBookClick}/>
      <Shelf onBookClick={handleBookClick}/>
      <Shelf onBookClick={handleBookClick}/>
      {bookPages()}
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
