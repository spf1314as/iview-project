const routers = [
    {
        path: '/',
        redirect: '/tpl'
    },
    {
        path: '/tpl',
        meta: {
            title: 'tpl'
        },
        component:  (resolve) => require(['./views/tpl.vue'], resolve),
        children:[
            {
                path: '',
                meta: 'index',
                redirect: 'form'
            },
            {
                path: 'form',
                meta: 'form',
                // component: _ => require(['./views/components/form.vue'], _)
                component: _ => import('./views/components/form.vue')
            },
            {
                path: 'table',
                meta: 'table',
                component: _ => require(['./views/components/table.vue'], _)
            }
        ]
    }
];
export default routers;