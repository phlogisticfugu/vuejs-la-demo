<template>
  <div class="container">
    <app-nav></app-nav>
    <h2>Welcome Vue.js Los Angeles</h2>
  </div>
</template>

<script>
import Nav from '@/components/Nav';

export default {
  components: {
    'app-nav': Nav,
  },
};
</script>
