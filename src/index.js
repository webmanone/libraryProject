import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Book {
    constructor(title){
        this.title = title;
    }
}

const libraryHeader = (
    <>
    <h1><span>Library</span></h1>
    </>
)

function Shelf() { 
  return <div className="shelf"></div>;
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
    </>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
