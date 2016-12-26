import axios from 'axios';
import { fetchItemSuccess } from './fetchItem';

export const addItemSuccess = (payload) => {
  return {
    type: 'ADD_ITEM_SUCCESS',
    payload,
  };
};
export const addItemError = () => {
  return {
    type: 'ADD_ITEM_ERROR',
  };
};
export const addItemPending = () => {
  return {
    type: 'ADD_ITEM_PENDING',
  };
};

export const addItem = (item) => {
  return function(dispatch) {
    dispatch(addItemPending());

    axios.post('/api/additem', item)
      .then(response => dispatch(fetchItemSuccess(response.data)))
      .catch(err => dispatch(addItemError(err)));
  };
};
