export const items = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ITEM_SUCCESS':
      return { all: action.items };
    case 'FETCH_ITEM_PENDING':
      return [];
    case 'FETCH_ITEM_ERROR':
      return [action.err];
    default: return state;
  }
};
