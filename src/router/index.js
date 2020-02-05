import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'/',
    redirect:'/yqdt',
    component:()=>import(/* webpackChunkName: "INDEX" */ '../views/index.vue'),
    children:[
      {
        path: '/yqdt',
        name: 'yqdt',
        component: () => import(/* webpackChunkName: "yqdt" */ '../views/Home.vue')
      },
      {
        path: '/qxmap',
        name: 'qxmap',
        component: () => import(/* webpackChunkName: "qxmap" */ '../views/About.vue')
      },
      {
        path: '/hotsearch',
        name: 'hotsearch',
        component: () => import(/* webpackChunkName: "hotsearch" */ '../views/About.vue')
      },
      {
        path: '/news',
        name: 'news',
        component: () => import(/* webpackChunkName: "news" */ '../views/About.vue')
      }
    ]
  },
  {
    path:'*',
    redirect:'/yqdt'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
