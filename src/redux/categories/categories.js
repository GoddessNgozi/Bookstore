// Action
const CHECK_STATUS = 'bookstore/books/CHECK_STATUS';

// Reducer
const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

// Action Creators
const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;
export { checkStatus };
