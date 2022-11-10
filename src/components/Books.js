import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const books = useSelector((state) => state.books);
  console.log(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} id={book.item_id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
};

export default Books;
