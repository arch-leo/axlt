import Vue from 'vue';
import Router from 'vue-router';
import get from './views/wash/get.vue';
import add from './views/wash/add.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/wash/get',
      name: 'get',
      component: get,
    },
    {
      path: '/wash/add',
      name: 'add',
      component: add,
    },
    {
      path: '/wash/update',
      name: 'renew',
      component: get,
    },

    {
      path: '**',
      redirect: {
        path: '/wash/get',
      },
    },
  ],
});
