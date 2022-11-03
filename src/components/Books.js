import React from 'react';
import Book from './Book';
import Form from './Form';

const data = [
  {
    id: 1,
    title: 'Book title',
    Author: 'Author',
  },
  {
    id: 2,
    title: 'Book title',
    author: 'Author',
  },
  {
    id: 3,
    title: 'Book title',
    author: 'Author',
  },
];

const Books = () => {
  return (
    <div>
      {data.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
}

export default Books;