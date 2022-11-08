// Actions
const ADD_BOOK = 'redux/books/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';

// Reducer
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

// Action Creators
const addBook = () => ({
  type: ADD_BOOK,
});

const removeBook = () => ({
  type: REMOVE_BOOK,
});

export { booksReducer, addBook, removeBook };
