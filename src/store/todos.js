export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';


export default {
  state: [],
  mutations: {
    [ADD_TODO](state, todo) {
      state.push(todo);
    },
    [REMOVE_TODO](state, id) {
      state.splice(state.findIndex((t) => t.id === id), 1);
    },
    [UPDATE_TODO](state, todo) {
      let originalTodoIndex = state.findIndex((t) => t.id === todo.id);
      let updatedTodo = Object.assign({}, state[originalTodoIndex], todo);
      state = state.splice(originalTodoIndex, 1, updatedTodo);
    }
  },
  actions: {
    [ADD_TODO]({commit}, todo) {
      commit(ADD_TODO, todo)
    },
    [REMOVE_TODO]({commit}) {
      commit(REMOVE_TODO)
    },
    [UPDATE_TODO]({commit}) {
      commit(UPDATE_TODO)
    }
  }
}