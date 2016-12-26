import { combineReducers } from 'redux';
import { addCategory } from './addCategory';
import { categories } from './categories';
import { deleteCategory } from './deleteCategory';
import { items } from './items';
import { addItem } from './addItem';
import { deleteItem } from './deleteItem';
import { categoryFilter } from './categoryFilter';


export const rootReducer = combineReducers({
  addCategory,
  categories,
  deleteCategory,
  items,
  addItem,
  deleteItem,
  categoryFilter,
});

export default rootReducer;
