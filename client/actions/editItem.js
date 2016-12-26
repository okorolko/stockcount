import axios from 'axios';
import { fetchItem } from './fetchItem';

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
    axios.post('/api/edititem', item)
      .then(() => dispatch(editItemSuccess()))
      .then(dispatch(fetchItem()))
      .catch(err => dispatch(editItemError(err)));
  };
};
