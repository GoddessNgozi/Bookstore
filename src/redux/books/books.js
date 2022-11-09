import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defaultState = [
  {
    id: uuidv4(),
    title: 'Book title',
    author: 'Author',
  },
  {
    id: uuidv4(),
    title: 'Book title',
    author: 'Author',
  },
  {
    id: uuidv4(),
    title: 'Book title',
    author: 'Author',
  },
];

// Reducer
const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

// Action Creators
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
