import axios from 'axios';
import { fetchItem } from './fetchItem';

export const addItemSuccess = () => {
  return {
    type: 'ADD_ITEM_SUCCESS',
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
      .then(() => dispatch(addItemSuccess()))
      .then(dispatch(fetchItem()))
      .catch(err => dispatch(addItemError(err)));
  };
};
