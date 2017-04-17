import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Example1 from '@/pages/Example1';
import Example2 from '@/pages/Example2';
import Nav from '@/components/Nav';

Vue.use(Router);

Vue.component('app-nav', Nav);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/example1',
      name: 'Example1',
      component: Example1,
    },
    {
      path: '/example2',
      name: 'Example2',
      component: Example2,
    },
  ],
});
