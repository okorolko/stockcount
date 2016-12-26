import axios from 'axios';
import { fetchItemSuccess } from './fetchItem';

export const editItemSuccess = () => {
  return {
    type: 'EDIT_ITEM_SUCCESS',
  };
};
export const editItemError = () => {
  return {
    type: 'EDIT_ITEM_ERROR',
  };
};
export const editItemPending = () => {
  return {
    type: 'EDIT_ITEM_PENDING',
  };
};
export const editItem = (item) => {
  return function(dispatch) {
    dispatch(editItemPending());

    //delete DOM elem from object to send post request
    delete item.anchorEl;

    axios.post('/api/edititem', item)
      .then(response => dispatch(fetchItemSuccess(response.data)))
      .catch(err => dispatch(editItemError(err)));
  };
};
