import {
  SET_TODO_FILTER,
  TodoFilters
} from '../actions';

const { SHOW_ALL } = TodoFilters;

function filter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_TODO_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filter;
