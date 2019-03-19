export const addTodo = (text: string, id: number) => ({
  id,
  text,
  type: 'ADD_TODO',
});

export const deleteTodo = (id: number) => ({
  id,
  type: 'REMOVE_TODO',
});

export const toggleTodo = (id: number) => ({
  id,
  type: 'TOGGLE_TODO',
});
