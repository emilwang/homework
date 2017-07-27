export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_TODO_FILTER = 'SET_TODO_FILTER';

export const TodoFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  };
}

export function setTodoFilter(filter) {
  return {
    type: SET_TODO_FILTER,
    filter
  };
}
