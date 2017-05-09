import Vue from 'vue';
import Vuex from 'vuex';
import todos from './todos';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', //Use strict mode in non production env (doesn't allow direct state mutation)
  modules: {
    todos
  },
});