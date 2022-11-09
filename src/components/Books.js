import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const data = useSelector((state) => state.books);
  return (
    <>
      {data.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </>
  );
};

export default Books;
