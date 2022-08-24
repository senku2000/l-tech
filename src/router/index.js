import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:"home",
        component: () => import('@/views/index.vue')
    },
    {
        path: '/services',
        name:"services",
        component: () => import('@/views/services.vue')
    },
]


const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
      },
})

export default router