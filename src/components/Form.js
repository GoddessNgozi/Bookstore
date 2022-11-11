import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Action',
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={addBookHandler}>
      <input type="text" placeholder="Book title" onChange={titleChange} value={title} required />
      <input type="text" placeholder="Author" onChange={authorChange} value={author} required />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
