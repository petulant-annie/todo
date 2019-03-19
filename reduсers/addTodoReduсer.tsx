
export const INITIAL_DATA = [
  {
    id: 0,
    text: 'Walk the Cat',
    completed: false,
  },
  {
    id: 1,
    text: 'learn Redux',
    completed: false,
  },
];

export const todos = (state = INITIAL_DATA, action: {type: string, id: number, text: string}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
