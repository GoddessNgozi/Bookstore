import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defaultState = [];

// Reducer
const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'bookstore/books/GET_BOOKS/fulfilled':
      return action.payload;
    case 'bookstore/books/ADD_BOOK/fulfilled':
      return [...state, action.payload];
    case 'bookstore/books/REMOVE_BOOK/fulfilled':
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

// Action Creators
export const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uRdluB3xvFrF73NSFW6p/books');
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  return books;
});

const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uRdluB3xvFrF73NSFW6p/books', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(book),
  });
  return book;
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});

export default booksReducer;
export { addBook, removeBook };
