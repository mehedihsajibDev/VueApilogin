import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/profile',
            name: 'profile',
            // lazy-loaded
            component: () =>
                import ('./views/Profile.vue')
        },

        {
            path: '/user',
            name: 'user',
            // lazy-loaded
            component: () =>
                import ('./views/BoardUser.vue')
        }, 
        
        {
            path: '/dashboard',
            name: 'dashboard',
            // lazy-loaded
            component: () =>
                import ('./views/Dashboard.vue')
        },
          
        {
            path: '/listspace',
            name: 'listspace',
            // lazy-loaded
            component: () =>
                import ('./views/Listspace.vue')
        },
        {
            path: '/basic:id',
            name: 'basic',
            // lazy-loaded
            component: () =>
                import ('./views/Basic.vue')
        },
      
        {
            path: '/dashboardtwo',
            name: 'dashboardtwo',
            // lazy-loaded
            component: () =>
                import ('./views/Dashboardtwo.vue')
        },
        {
            path: '/description:id',
            name: 'description',
            // lazy-loaded
            component: () =>
                import ('./views/Description.vue')
        },
        {
            path: '/location:id',
            name: 'location',
            // lazy-loaded
            component: () =>
                import ('./views/Location.vue')
        }
        
    ]
});
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/home', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // try to access a restricted page + not logged in
    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
});