import axios from 'axios';
import { fetchItemSuccess } from './fetchItem';

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

    //delete DOM elem from object to send post request
    delete item.anchorEl;

    axios.post('/api/removeitem', item)
      .then(response => dispatch(fetchItemSuccess(response.data)))
      .catch(err => dispatch(deleteItemError(err)));
  };
};
