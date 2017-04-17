import { mapMutations } from 'vuex';
import Todo from './Todo.vue';

// https://github.com/vuejs/vuex/blob/dev/examples/todomvc/components/App.vue

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done),
};

export default {
  components: { Todo },
  data() {
    return {
      visibility: 'all',
      filters,
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    allChecked() {
      return this.todos.every(todo => todo.done);
    },
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    },
  },
  methods: {
    addTodo(e) {
      const text = e.target.value;
      if (text.trim()) {
        this.$store.commit('addTodo', { text });
      }
      e.target.value = '';
    },
    ...mapMutations([
      'toggleAll',
      'clearCompleted',
    ]),
  },
  filters: {
    pluralize(n, w) {
      return n === 1 ? w : (`${w}s`);
    },
    capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
  },
};
