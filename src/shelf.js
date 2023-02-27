import React, { useState } from 'react';

//shelf component. all the functions inside occur within each specific shelf
function Shelf() {
    const [bookCounter, setBookCounter] = useState(0); //initialises hook to 0 that will track how many books are in a shelf
  
    const [book, setBook] = useState({
      title: "",
      author: ""
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
      setBook({ title: "", author: "" });
    }
  
    //function that hides the input div when the cancel button is clicked
    function handleCancelClick(e) {
      e.stopPropagation();
      setShowInput(false);
    }
  
    //function that shows the input div when the shelf is clicked.
    function handleShelfClick() {
      setShowInput(true);
    }

    //function that deletes the book when clicked
    function handleDeleteBook(index, e){
      e.stopPropagation();
      setBooks(prevBooks => {
        const newBooks = [...prevBooks]; // create a copy of the books array
        newBooks.splice(index, 1); // remove the book at the specified index
        return newBooks; // return the updated books array to setBooks
      });
    }
  
    //function that shows the input div when showInput is true
    function bookInput() {
      if (showInput) {
        return (
          <div className="bookInput">
            <div className="inputHolder">
              <input type="text" name="title" placeholder="Title" value={book.title} onChange={updateBook} />
              <input type="text" name="author" placeholder="Author" value={book.author} onChange={updateBook} />
            </div>
            <br />
              <button className="addBookButton" onClick={handleAddBookClick}>Add Book</button>
              <button className="closeBookInput" onClick={handleCancelClick}>&times;</button>
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
            {book.title}<div className="by">by</div>{book.author}
            <button className="deleteBook" onClick={(e) => handleDeleteBook(index, e)}>&times;</button>
          </div>
        ))}
      </div>
     </div>
    );
  }

  export default Shelf;