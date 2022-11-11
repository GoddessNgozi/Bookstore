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
      return state.filter((book) => book.item_id !== action.payload.id);
    default:
      return state;
  }
};

// Action Creators
export const getBooks = createAsyncThunk(GET_BOOKS, async (post, { dispatch }) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uRdluB3xvFrF73NSFW6p/books');
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
});

const addBook = createAsyncThunk(ADD_BOOK, async (book, { dispatch }) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uRdluB3xvFrF73NSFW6p/books', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(book),
  });
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (id, { dispatch }) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uRdluB3xvFrF73NSFW6p/books/${id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE_BOOK,
    payload: { id },
  });
});

export default booksReducer;
export { addBook, removeBook };
