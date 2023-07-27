export const constantRoute = [
    {
        path: '/',
        component: () => import('../views/home/index.vue'),
        name: 'home',
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login'

    }
]