export const addCategory = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        editing: false,
        edited: true,
      });
    case 'ADD_CATEGORY_PENDING':
      return Object.assign({}, state, {
        editing: true,
        edited: false,
      });
    case 'ADD_CATEGORY_ERROR':
      return Object.assign({}, state, {
        editing: false,
        edited: false,
      });
    default: return state;
  }
};
