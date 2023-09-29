import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:"main",
        component: () => import('@/views/main.vue')
    },
    {
        path: '404',
        name: '404',
        component: () => import('@/views/404.vue')
        
    },
    {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about.vue')
        
    },
    {
        path: 'imprint',
        name: 'imprint',
        component: () => import('@/views/imprint.vue')
        
    },
    {
        path: 'typography',
        name: 'typography',
        component: () => import('@/views/typography.vue')
        
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