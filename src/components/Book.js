import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-row">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={removeBookHandler}>Remove</button>
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
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
