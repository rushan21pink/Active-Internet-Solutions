import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(_, _1, savedPosition) {
    if (savedPosition)
      return savedPosition;

    return { left: 0, top: 0 };
  },
});

export const routerBack = () => router.back();

export default router;
