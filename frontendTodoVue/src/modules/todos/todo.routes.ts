import type { RouteRecordRaw } from 'vue-router';

export const todoRoutes: RouteRecordRaw[] = [
  {
    path: '/todos',
    name: 'todos',
    component: () => import('./views/TodoView.vue'),
  },
];
