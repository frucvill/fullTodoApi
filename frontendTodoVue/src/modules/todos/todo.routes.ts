// import type { RouteRecordRaw } from 'vue-router';

// export const todoRoutes: RouteRecordRaw[] = [
//   {
//     path: '/todos',
//     name: 'todos',
//     component: () => import('./views/TodoView.vue'),
//   },
// ];

import type { RouteRecordRaw } from 'vue-router';
import TodoView from './views/TodoView.vue';

export const todoRoutes: RouteRecordRaw[] = [
  {
    path: '/todos',
    name: 'todos',
    component: TodoView,
  },
];