import Vue from 'vue'
import Router from 'vue-router'

const HomePage = () => import(/* webpackChunkName: "HomePage" */'@/pages/HomePage.vue');
const AwardsPage = () => import(/* webpackChunkName: "AwardsPage" */'@/pages/AwardsPage.vue');
const ClientsPage = () => import(/* webpackChunkName: "ClientsPage" */'@/pages/ClientsPage.vue');
const ContactsPage = () => import(/* webpackChunkName: "ContactsPage" */'@/pages/ContactsPage.vue');
const AboutPage = () => import(/* webpackChunkName: "AboutPage" */'@/pages/AboutPage.vue');
const CasePage = () => import(/* webpackChunkName: "AboutPage" */'@/pages/CasePage.vue');

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: {
            template: '<router-view></router-view>',
        },

        children: [
            {
                path: '',
                name: 'home',
                component: HomePage,
            },
            {
                path: 'awards',
                name: 'awards',
                component: AwardsPage,
            },
            {
                path: 'clients',
                name: 'clients',
                component: ClientsPage,
            },
            {
                path: 'contacts',
                name: 'contacts',
                component: ContactsPage,
            },
            {
                path: 'about',
                name: 'about',
                component: AboutPage,
            },
            {
                path: 'case',
                name: 'case',
                component: CasePage,
            },
            /*{
                path: '*',
                name: 'NotFound',
                component: Page404,
            },*/
        ],
    },
];

const router = new Router({
    mode: 'history',
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {selector: to.hash};
        }
        return {
            x: 0,
            y: 0,
            behavior: 'smooth'
        };
    },
});

export default router;

