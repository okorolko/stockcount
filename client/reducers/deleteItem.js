export const deleteItem = (state = {}, action) => {
  switch (action.type) {
    case 'DELETE_ITEM_SUCCESS':
      return Object.assign({}, state, {
        editing: false,
        edited: true,
      });
    case 'DELETE_ITEM_PENDING':
      return Object.assign({}, state, {
        editing: true,
        edited: false,
      });
    case 'DELETE_ITEM_ERROR':
      return Object.assign({}, state, {
        editing: false,
        edited: false,
      });
    default: return state;
  }
};
