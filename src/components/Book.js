import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book-row">
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <div>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>

    <div className="progressor">
      <div className="circular-progress-container">
        <div className="circular-progress" />
      </div>
      <div className="progress-stat">
        <p className="percent-complete">64%</p>
        <p className="completed">Completed</p>
      </div>
    </div>

    <div>
      <p>Current Chapter</p>
      <p>Chapter 17</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
