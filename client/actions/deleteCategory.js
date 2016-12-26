import axios from 'axios';
import { fetchCategorySuccess } from './fetchCategory';
import { fetchItemSuccess } from './fetchItem';

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

function postDelCat(_id, name) {
  return axios.post('/api/removecategory', { id: _id, name });
}

function getItemsList() {
  return axios.get('/api/allitems');
}

export const deleteCategory = (category) => {
  const { _id, name } = category;
  return function(dispatch) {
    dispatch(deleteCategoryPending());

    axios.all([postDelCat(_id, name), getItemsList()])
      .then(axios.spread((categories, items) => {
        dispatch(fetchCategorySuccess(categories.data));
        dispatch(fetchItemSuccess(items.data));
      }))
      .catch(err => dispatch(deleteCategoryError(err)));
  };
};



