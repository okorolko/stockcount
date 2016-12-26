import axios from 'axios';
import { fetchItem } from './fetchItem';

export const deleteItemSuccess = () => {
  return {
    type: 'DELETE_ITEM_SUCCESS',
  };
};
export const deleteItemError = () => {
  return {
    type: 'DELETE_ITEM_ERROR',
  };
};
export const deleteItemPending = () => {
  return {
    type: 'DELETE_ITEM_PENDING',
  };
};
export const deleteItem = (item) => {
  return function(dispatch) {
    dispatch(deleteItemPending());
    axios.post('/api/removeitem', item)
      .then(() => dispatch(deleteItemSuccess()))
      .then(dispatch(fetchItem()))
      .catch(err => dispatch(deleteItemError(err)));
  };
};
