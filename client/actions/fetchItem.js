import axios from 'axios';

export const fetchItemSuccess = (items) => {
  return {
    type: 'FETCH_ITEM_SUCCESS',
    items,
  };
};
export const fetchItemError = () => {
  return {
    type: 'FETCH_ITEM_ERROR',
  };
};
export const fetchItemPending = () => {
  return {
    type: 'FETCH_ITEM_PENDING',
  };
};

export const fetchItem = () => {
  return function(dispatch) {
    dispatch(fetchItemPending());
    axios.get('/api/allitems')
      .then(response => dispatch(fetchItemSuccess(response.data)))
      .catch(err => dispatch(fetchItemError(err)));
  };
};
