export const addItem = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM_SUCCESS':
      return Object.assign({}, state, {
        editing: false,
        edited: true,
      });
    case 'ADD_ITEM_PENDING':
      return Object.assign({}, state, {
        editing: true,
        edited: false,
      });
    case 'ADD_ITEM_ERROR':
      return Object.assign({}, state, {
        editing: false,
        edited: false,
      });
    default: return state;
  }
};
