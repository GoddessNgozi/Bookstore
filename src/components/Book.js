import React from 'react';

const Book = ({ title, author }) => {
    return (
      <div className='book-row'>
        <div>
          <h2>{title}</h2>
          <p>{author}</p>
        <div>
            <button>Comments</button>
            <button>Remove</button>
            <button>Edit</button>
        </div>
      </div>

        <div className='progressor'>
        <div className="circular-progress-container">
          <div className="circular-progress"></div>
        </div>
        <div class="progress-stat">
          <p class="percent-complete">64%</p>
          <p class="completed">Completed</p>
        </div>
        </div>

        <div>
          <p>Current Chapter</p>
          <p>Chapter 17</p>
          <button>UPDATE PROGRESS</button>
        </div>
      </div>
    );
  }
  
  export default Book;