export const addItem = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_ITEM_SUCCESS':
      return Object.assign({}, state, {
        editing: false,
        edited: true,
      });
    case 'EDIT_ITEM_PENDING':
      return Object.assign({}, state, {
        editing: true,
        edited: false,
      });
    case 'EDIT_ITEM_ERROR':
      return Object.assign({}, state, {
        editing: false,
        edited: false,
      });
    default: return state;
  }
};
