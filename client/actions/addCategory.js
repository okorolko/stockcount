import axios from 'axios';
import { fetchCategory } from './fetchCategory';

export const addCategorySuccess = () => {
  return {
    type: 'ADD_CATEGORY_SUCCESS',
  };
};
export const addCategoryError = () => {
  return {
    type: 'ADD_CATEGORY_ERROR',
  };
};
export const addCategoryPending = () => {
  return {
    type: 'ADD_CATEGORY_PENDING',
  };
};

export const addCategory = (name) => {
  return function(dispatch) {
    dispatch(addCategoryPending());
    axios.post('/api/addcategory', {name: name})
      .then(() => dispatch(addCategorySuccess()))
      .then(dispatch(fetchCategory()))
      .catch(err => dispatch(addCategoryError(err)));
  };
};
