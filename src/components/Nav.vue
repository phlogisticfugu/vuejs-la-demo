<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <ul class="nav nav-tabs">
        <li role="presentation">
          <!-- refer to route by path -->
          <router-link to="/">Home</router-link>
        </li>
        <li role="presentation">
          <!-- refer to route by name -->
          <router-link :to="{name: 'Example1'}">Example1</router-link>
        </li>
        <li role="presentation">
          <router-link to="/example2">Example2</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
