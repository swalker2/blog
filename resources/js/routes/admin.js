export default {
  mode: 'history',
  linkActiveClass: 'underline',
  routes: [
    {
      name: 'Admin',
      path: '/admin',
      component: () => import(/* webpackChunkName: "js/pages/admin.home" */'../pages/admin/home')
    },
    {
      name: 'Pages',
      breadcrumb: 'Admin > Pages',
      path: '/admin/pages',
      component: () => import(/* webpackChunkName: "js/pages/admin.pages" */'../pages/admin/pages/index')
    },
    {
      name: 'Posts',
      path: '/admin/posts',
      component: () => import(/* webpackChunkName: "js/pages/admin.posts" */'../pages/admin/posts/index')
    },

    {
      path: '*',
      component: () => import(/* webpackChunkName: "js/pages/404" */'../pages/not-found')
    }
  ]
}
