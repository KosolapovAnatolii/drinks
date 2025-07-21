const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'whiskey', name: 'whiskey', component: () => import('pages/WhiskeyPage.vue') },
      { path: 'brandy', name: 'brandy', component: () => import('pages/BrandyPage.vue') },
      { path: 'cognac', name: 'cognac', component: () => import('pages/CognacPage.vue') },
      { path: 'rhum', name: 'rhum', component: () => import('pages/RhumPage.vue') },
      { path: 'bourbon', name: 'bourbon', component: () => import('pages/BourbonPage.vue') },

      { path: 'whiskey/:slug', component: () => import('pages/DrinkDetailsPage.vue') },
      { path: 'brandy/:slug', component: () => import('pages/DrinkDetailsPage.vue') },
      { path: 'cognac/:slug', component: () => import('pages/DrinkDetailsPage.vue') },
      { path: 'rhum/:slug', component: () => import('pages/DrinkDetailsPage.vue') },
      { path: 'bourbon/:slug', component: () => import('pages/DrinkDetailsPage.vue') },
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', name: 'auth', component: () => import('pages/AuthPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
