const Home = () => import('./components/Home.vue')

const Mostrar = () => import('./components/sucursal/Mostrar.vue')
const Crear = () => import('./components/sucursal/Crear.vue')
const Editar = () => import('./components/sucursal/Editar.vue')



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




]
