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
      <input className="title-input" type="text" placeholder="Book title" onChange={titleChange} value={title} required />
      <input className="author-input" type="text" placeholder="Author" onChange={authorChange} value={author} required />
      <select className="category-input">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button className="primary-button-big" type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
