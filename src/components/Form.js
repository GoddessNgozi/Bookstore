import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    const book = {
      id: books.length + 1,
      author,
      title,
    };
    dispatch(addBook(book));
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={addBookHandler}>
      <input type="text" placeholder="Book title" onChange={titleChange} value={title} />
      <input type="text" placeholder="Author" onChange={authorChange} value={author} />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
