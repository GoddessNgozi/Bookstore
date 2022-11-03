import React from 'react';

const Book = ({ title, author }) => {
    return (
      <div>
        <div>
          <h3>{title}</h3>
          <p>{author}</p>
          <div>
            <span>Comments</span>
            <span>Remove</span>
            <span>Edit</span>
          </div>
        </div>
  
        <div>
          <span>Current Chapter</span>
          <span>Chapter 17</span>
        </div>
      </div>
    );
  }
  
  export default Book;