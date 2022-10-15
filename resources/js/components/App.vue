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
                        <router-link exact-active-class="active" to="/alumnos" class="nav-link">Alumnos</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link exact-active-class="active" to="/catedraticos" class="nav-link">Catedráticos</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link exact-active-class="active" to="/grados" class="nav-link">Grados</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link exact-active-class="active" to="/nivels" class="nav-link">Niveles</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link exact-active-class="active" to="/cursos" class="nav-link">Cursos</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link exact-active-class="active" to="/sucursals" class="nav-link">Sucursales</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
export default {}
</script>
