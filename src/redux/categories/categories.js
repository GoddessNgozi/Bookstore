// Actions
const CHECK_STATUS = 'redux/categories/CHECK_STATUS';

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

export { categoriesReducer, checkStatus };
