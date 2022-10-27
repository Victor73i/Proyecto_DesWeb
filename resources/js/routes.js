const Home = () => import('./components/Home.vue')

const Mostrar = () => import('./components/sucursal/Mostrar.vue')
const Crear = () => import('./components/sucursal/Crear.vue')
const Editar = () => import('./components/sucursal/Editar.vue')

const Mostrar8 = () => import('./components/API/Mostrar.vue')


const Mostrar1 = () => import('./components/nivel/Mostrar.vue')
const Crear1 = () => import('./components/nivel/Crear.vue')
const Editar1 = () => import('./components/nivel/Editar.vue')

const Mostrar2 = () => import('./components/catedratico/Mostrar.vue')
const Crear2 = () => import('./components/catedratico/Crear.vue')
const Editar2 = () => import('./components/catedratico/Editar.vue')

const Mostrar3 = () => import('./components/curso/Mostrar.vue')
const Crear3 = () => import('./components/curso/Crear.vue')
const Editar3 = () => import('./components/curso/Editar.vue')

const Mostrar4 = () => import('./components/grado/Mostrar.vue')
const Crear4 = () => import('./components/grado/Crear.vue')
const Editar4 = () => import('./components/grado/Editar.vue')

const Mostrar5 = () => import('./components/alumno/Mostrar.vue')
const Crear5 = () => import('./components/alumno/Crear.vue')
const Editar5 = () => import('./components/alumno/Editar.vue')

const Mostrar6 = () => import('./components/asigna_catedratico/Mostrar.vue')
const Crear6 = () => import('./components/asigna_catedratico/Crear.vue')
const Editar6 = () => import('./components/asigna_catedratico/Editar.vue')

const Mostrar7 = () => import('./components/alumno_inscrito/Mostrar.vue')
const Crear7 = () => import('./components/alumno_inscrito/Crear.vue')
const Editar7 = () => import('./components/alumno_inscrito/Editar.vue')

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
        path: '/crear1',
        component: Crear1
    },
    {
        name: 'editarNivel',
        path: '/editar1/:id',
        component: Editar1
    },
    {
        name: 'mostrarCatedraticos',
        path: '/catedraticos',
        component: Mostrar2
    },
    {
        name: 'crearCatedratico',
        path: '/crear2',
        component: Crear2
    },
    {
        name: 'editarCatedratico',
        path: '/editar2/:id',
        component: Editar2
    },
    {
        name: 'mostrarCursos',
        path: '/cursos',
        component: Mostrar3
    },
    {
        name: 'crearCurso',
        path: '/crear3',
        component: Crear3
    },
    {
        name: 'editarCurso',
        path: '/editar3/:id',
        component: Editar3
    },
    {
        name: 'mostrarGrados',
        path: '/grados',
        component: Mostrar4
    },
    {
        name: 'crearGrado',
        path: '/crear4',
        component: Crear4
    },
    {
        name: 'editarGrado',
        path: '/editar4/:id',
        component: Editar4
    },
    {
        name: 'mostrarAlumnos',
        path: '/alumnos',
        component: Mostrar5
    },
    {
        name: 'crearAlumno',
        path: '/crear5',
        component: Crear5
    },
    {
        name: 'editarAlumno',
        path: '/editar5/:id',
        component: Editar5
    },
    {
        name: 'mostrarAsigna_catedraticos',
        path: '/asigna_catedraticos',
        component: Mostrar6
    },
    {
        name: 'crearAsigna_catedratico',
        path: '/crear6',
        component: Crear6
    },
    {
        name: 'editarAsigna_catedratico',
        path: '/editar6/:id',
        component: Editar6
    },
    {
        name: 'mostrarAlumno_inscritos',
        path: '/alumno_inscritos',
        component: Mostrar7
    },
    {
        name: 'crearAlumno_inscrito',
        path: '/crear7',
        component: Crear7
    },
    {
        name: 'editarAlumno_inscrito',
        path: '/editar7/:id',
        component: Editar7
    },
    {
        name: 'mostrarAPIs',
        path: '/APIs',
        component: Mostrar8
    },
]
