import Home from "@/pages/home/index.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/mserve',
        name: 'mserve',
        component: () => import('@/pages/mserve/index.vue')
      }
    ]
  },
  {
    path: '/mlogs',
    name: 'mlogs',
    component: () => import('@/pages/mlogs/index.vue')
  },
  {
    path: '/mstore',
    name: 'mstore',
    component: () => import('@/pages/mstore/index.vue')
  }
]

export default routes