import Vue from 'vue';
import Vuex from 'vuex';
import TodoMVC from '@/components/TodoMVC.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    addTodo(state, { text }) {
      state.todos.push({
        text,
        done: false,
      });
    },
    deleteTodo(state, { todo }) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
    toggleTodo(state, { todo }) {
      todo.done = !todo.done;
    },
    editTodo(state, { todo, value }) {
      todo.text = value;
    },
    toggleAll(state, { done }) {
      state.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.done);
    },
  },
});

export default {
  name: 'Example2',
  store,
  components: {
    'app-todomvc': TodoMVC,
  },
};
