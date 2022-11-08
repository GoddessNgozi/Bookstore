const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

const addBook = () => ({
  type: ADDBOOK,
});

const removeBook = () => ({
  type: REMOVEBOOK,
});

export { booksReducer, addBook, removeBook };
