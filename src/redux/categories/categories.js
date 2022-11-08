const CHECKSTATUS = 'CHECKSTATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: CHECKSTATUS,
});

export { categoriesReducer, checkStatus };
