import axios from 'axios';
import { fetchCategory } from './fetchCategory';

export const deleteCategorySuccess = (categories) => {
  return {
    type: 'DELETE_CATEGORY_SUCCESS',
    categories,
  };
};
export const deleteCategoryError = () => {
  return {
    type: 'DELETE_CATEGORY_ERROR',
  };
};
export const deleteCategoryPending = () => {
  return {
    type: 'DELETE_CATEGORY_PENDING',
  };
};

export const deleteCategory = (category) => {
  const { _id, name } = category;
  return function(dispatch) {
    dispatch(deleteCategoryPending());
    axios.post('/api/removecategory', { id: _id, name })
      .then(response => dispatch(deleteCategorySuccess(response.data)))
      .then(dispatch(fetchCategory()))
      .catch(err => dispatch(deleteCategoryError(err)));
  };
};
