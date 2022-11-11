import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="partition">
      <div>
        <h4 className="book-category">Action</h4>
        <h2 className="book-title">{title}</h2>
        <h6 className="book-author">{author}</h6>
        <div className="action-buttons">
          <button className="button-outline" type="button">Comments</button>
          <div className="vertical-divider" />
          <button className="button-outline" type="button" onClick={removeBookHandler}>Remove</button>
          <div className="vertical-divider" />
          <button className="button-outline" type="button">Edit</button>
        </div>
      </div>

      <div className="progress-container">
        <div className="progressor">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>

        <div className="progress-divider" />

        <div className="current-chapter-container">
          <div>
            <p className="current-chapter current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <button className="update" type="button">UPDATE PROGRESS</button>
        </div>
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
