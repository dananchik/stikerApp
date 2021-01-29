import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home'
import StikerIndexView from './views/Stikers/Index'
import CreateStikerView from './views/Admin/Stikers/Create.vue'
import EditStikerView from './views/Admin/Stikers/Edit.vue'
import ShowStikerView from './views/Stikers/Show.vue'
import Login from './views/Auth/Login.vue'
import Register from './views/Auth/Register.vue'
import ShowCategoryView from './views/Categories/Show.vue'
import CategoryIndexView from './views/Categories/Index.vue'
import CategoryEditView from './views/Admin/Categories/Edit.vue'
import CategoryCreateView from './views/Admin/Categories/Create.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { layout: 'Main', auth: false },
        component: Home
    },

    {
        path: '/stikers/create',
        name: 'StikersCreate',
        meta: { layout: 'Main', auth: true },
        component: CreateStikerView
    },

    {
        path: '/stikers',
        name: 'Stikers',
        meta: { layout: 'Main', auth: false },
        component: StikerIndexView
    },   {
        path: '/stikers/:id',
        name: 'StikerShow',
        meta: { layout: 'Main', auth: false },
        component: ShowStikerView
    },
    {
        path: '/categories/:id/edit',
        name: 'EditStiker',
        meta: { layout: 'Main', auth: true },
        component: EditStikerView
    },
    {
        path: '/auth/login',
        name: 'Login',
        meta: { layout: 'Main', auth: false },
        component: Login
    },
    {
        path: '/auth/register',
        name: 'Register',
        meta: { layout: 'Main', auth: false },
        component: Register
    },
    {
        path: '/categories',
        name: 'Categories',
        meta: { layout: 'Main', auth: false },
        component: CategoryIndexView
    },
    {
        path: '/categories/create',
        name: 'CategoryCreate',
        meta: { layout: 'Main', auth: true },
        component: CategoryCreateView
    },
    {
        path: '/categories/:id/edit',
        name: 'CategoryEdit',
        meta: { layout: 'Main', auth: true },
        component: CategoryEditView
    },
    {
        path: '/categories/:id',
        name: 'ShowCategory',
        meta: { layout: 'Main', auth: false },
        component: ShowCategoryView
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
