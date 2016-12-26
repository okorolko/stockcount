export const deleteCategory = (state = {}, action) => {
  switch (action.type) {
    case 'DELETE_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        editing: false,
        edited: true,
      });
    case 'DELETE_CATEGORY_PENDING':
      return Object.assign({}, state, {
        editing: true,
        edited: false,
      });
    case 'DELETE_CATEGORY_ERROR':
      return Object.assign({}, state, {
        editing: false,
        edited: false,
      });
    default: return state;
  }
};
