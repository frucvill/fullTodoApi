import { createRouter, createWebHistory } from 'vue-router';
import { todoRoutes } from '@/modules/todos/todo.routes';
//const HelloWorld = () => import('@/components/HelloWorld.vue'); // O la ruta correcta de tu componente de Vite
const HelloWellcomeView = () => import('@/views/HelloWellcomeView.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWellcomeView, // Esto se mostrará por defecto en http://localhost:5173/
    },
    ...todoRoutes, // Esto inyectará tu ruta /todos y cargará tu módulo
  ],
});

export default router;
