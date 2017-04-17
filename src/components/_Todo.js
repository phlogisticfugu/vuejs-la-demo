import { mapMutations } from 'vuex';

export default {
  name: 'Todo',
  props: ['todo'],
  data() {
    return {
      editing: false,
    };
  },
  directives: {
    focus(el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus();
        });
      }
    },
  },
  methods: {
    ...mapMutations([
      'editTodo',
      'toggleTodo',
      'deleteTodo',
    ]),
    doneEdit(e) {
      const value = e.target.value.trim();
      const { todo } = this;
      if (!value) {
        this.deleteTodo({
          todo,
        });
      } else if (this.editing) {
        this.editTodo({
          todo,
          value,
        });
        this.editing = false;
      }
    },
    cancelEdit(e) {
      e.target.value = this.todo.text;
      this.editing = false;
    },
  },
};
