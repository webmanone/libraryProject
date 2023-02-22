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
