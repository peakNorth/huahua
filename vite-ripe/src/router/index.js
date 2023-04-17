import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                index: 1
            }
        },
        {
            path: '/pwdmg',
            name: 'pwdmg',
            component: () => import('@/views/PasswdManage.vue'),
            meta: {
                index: 1
            }
        },
    ]
})

export default router
