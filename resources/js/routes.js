const Home = () => import('./components/Home.vue')

const Mostrar = () => import('./components/sucursal/Mostrar.vue')
const Crear = () => import('./components/sucursal/Crear.vue')
const Editar = () => import('./components/sucursal/Editar.vue')

const Mostrar1 = () => import('./components/nivel/Mostrar.vue')
const Crear1 = () => import('./components/nivel/Crear.vue')
const Editar1 = () => import('./components/nivel/Editar.vue')

export const routes = [


    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'mostrarSucursals',
        path: '/sucursals',
        component: Mostrar
    },
    {
        name: 'crearSucursal',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarSucursal',
        path: '/editar/:id',
        component: Editar
    },
    {
        name: 'mostrarNivels',
        path: '/nivels',
        component: Mostrar1
    },
    {
        name: 'crearNivel',
        path: '/crear',
        component: Crear1
    },
    {
        name: 'editarNivel',
        path: '/editar1/:id',
        component: Editar1
    },



]
