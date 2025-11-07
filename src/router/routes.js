const routes = [
  {
    path: '/',
    component: () => import('pages/EditPrintPage.vue'),
    // component: () => import('layouts/MainLayout.vue'),
    // children: [
      // { path: '', component: () => import('pages/QuoterPage.vue') },
    // ]
  },
  // { path: '/edit-print', component: () => import('pages/EditPrintPage.vue') },
  // { path: '/print', component: () => import('pages/PrintPage.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
