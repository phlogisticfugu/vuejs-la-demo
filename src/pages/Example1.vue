<template>
  <div>
    <app-nav></app-nav>
    <h2>This is the first example page!!</h2>
    <div class="panel panel-default">
      <div class="panel-heading">
        Simple Counter Example
      </div>
      <div class="panel-body">
        <app-counter></app-counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter';

export default {
  components: {
    'app-counter': Counter,
  },
};
</script>
