// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_TODO':
    return {
      ...state,
      listtodo: [...state.listTodo, {
        text: action.payload,
        completed: false,
        id: state.id,
      }],
      id: state.id + 1,
    };
  case 'FILTER_TODOS':
    return {
      ...state,
      filter: action.filter,
    };
  case 'TOOGLE_TODOS':
    return {
      ...state,
      listTodo: state.listTodo.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    };
  default:
    return state;
  }
}
export default wallet;
