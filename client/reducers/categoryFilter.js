export const categoryFilter = (state = 'all', action) => {
  switch (action.type) {
    case 'CATEGORY_FILTER':
      return action.payload;
    default: return state;
  }
};
