import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defaultState = [];

// Reducer
const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

const toArray = (data) => {
  const bookArray = Object.entries(data).map(([key, val]) => {
    const { title, author, category } = val[0];
    return {
      id: key,
      title,
      author,
      category,
    };
  });
  return bookArray;
};

// Action Creators
export const getBooks = createAsyncThunk(GET_BOOKS, async (post, { dispatch }) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QWE80YAxuTk35K5Gx26Z/books');
  const data = await response.json();
  const books = toArray(data);
  if (books) {
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  }
});

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: { id },
});

export default booksReducer;
export { addBook, removeBook };
