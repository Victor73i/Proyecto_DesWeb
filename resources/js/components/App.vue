<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <a class="navbar-brand" href="/"><i class="fa fa-laptop" aria-hidden="true"></i> CODIGO RAPIDITO</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
<!--            <router-link exact-active-class="active" to="/" class="nav-item active" aria-current="page">Inicio</router-link>-->
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link exact-active-class="active" to="/alumnos" class="nav-link">Alumnos Registrados</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link exact-active-class="active" to="/catedraticos" class="nav-link">Catedráticos Registrados</router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Más
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/nivels">   Niveles </a>
                            <a class="dropdown-item" href="/grados">   Grados </a>
                            <a class="dropdown-item" href="/cursos">   Cursos </a>
                            <a class="dropdown-item" href="/sucursals">  Sucursales </a>

                        </div>

                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="APIS" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Api´s
                        </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                            <a class="dropdown-item" href="/APIs">  SICOEP Por Profesor</a>
                            <a class="dropdown-item" href="/APIs1">  SICOEP Por Estudiantes</a>
                            <a class="dropdown-item" href="/APIs2">  SICOEP Por Escuela</a>

                        </div>

                    </li>
                </ul>
            </div>
        </nav>
        <div class="container mt-4 mb-2 p-1">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
export default {}
</script>
