// const todoId = 0;

export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  id,
  text,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});
