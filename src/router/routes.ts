export const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: { name: 'Dashboard.Main' },
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Main',
        meta: {
          breadcrumb: 'Main',
          title: 'Main',
        },
        component: () => import('@/components/templates/TheEmptyRouterView.vue'),
        children: [
          {
            path: '',
            name: 'Main.Main',
            component: () => import('@/pages/Main.vue'),
          },
        ],
      },
      // error pages
      {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        meta: {
          title: 'Ошибка',
        },
        component: () => import('@/pages/Error.vue'),
      },
    ],
  },

];
