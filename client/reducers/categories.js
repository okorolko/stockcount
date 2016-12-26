export const categories = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORY_SUCCESS':
      return { all: action.categories };
    case 'FETCH_CATEGORY_PENDING':
      return [];
    case 'FETCH_CATEGORY_ERROR':
      return [action.err];
    default: return state;
  }
};
