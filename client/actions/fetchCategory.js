import axios from 'axios';

export const fetchCategorySuccess = (categories) => {
  return {
    type: 'FETCH_CATEGORY_SUCCESS',
    categories,
  };
};
export const fetchCategoryError = () => {
  return {
    type: 'FETCH_CATEGORY_ERROR',
  };
};
export const fetchCategoryPending = () => {
  return {
    type: 'FETCH_CATEGORY_PENDING',
  };
};

export const fetchCategory = () => {
  return function(dispatch) {
    dispatch(fetchCategoryPending());
    axios.get('/api/allcategories')
      .then(response => dispatch(fetchCategorySuccess(response.data)))
      .catch(err => dispatch(fetchCategoryError(err)));
  };
};
