<template>
  <div class="row">
    <div class="col-md-4"> Simple Count </div>
    <div class="col-md-4"> {{ count }} </div>
    <div class="col-md-4">
      <div class="input-group">
        <button class="form-control" @click="increment"> + </button>
        <button class="form-control" @click="decrement"> - </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
  },
});

export default {
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    increment() {
      store.commit('increment');
    },
    decrement() {
      store.commit('decrement');
    },
  },
};
</script>
