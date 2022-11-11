import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <ul className="books">
        {books.map((book) => (
          <li className="book-row" key={book.item_id}>
            <Book id={book.item_id} title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <div className="horizontal-divider" />
      <section>
        <h2 className="form-title">ADD NEW BOOK</h2>
        <Form />
      </section>
    </>
  );
};

export default Books;
