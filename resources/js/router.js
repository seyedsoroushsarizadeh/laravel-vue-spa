import Vue from "vue/dist/vue";
import Router from "vue-router/dist/vue-router";

Vue.use(Router);

const routes = [
    {
        path:'/',
        name:'welcome',
        component:  () => import('./views/Welcome')
    },
    {
        path:'/categories',
        name:'categories',
        component: () => import('./views/Categories')
    }
]

const router = new Router({
    routes:routes
})

export default router;
