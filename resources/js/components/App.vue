<template>
    <main>
<!--        <nav class="navbar navbar-expand-lg navbar-light bg-info">-->
<!--            <div class="container-fluid">-->
<!--                <a class="navbar-brand" href="#">Tarea Vue.js</a>-->
<!--                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                    <span class="navbar-toggler-icon"></span>-->
<!--                </button>-->
<!--                <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
<!--                        <li class="nav-item">-->
<!--                            <router-link exact-active-class="active" to="/" class="nav-link active" aria-current="page">Inicio</router-link>-->
<!--                        </li>-->


<!--                    </ul>-->

<!--                </div>-->
<!--            </div>-->
<!--        </nav>-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
            <router-link exact-active-class="active" to="/" class="nav-link" style="color: beige">CODIGO RAPIDITO</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
<!--            <router-link exact-active-class="active" to="/" class="nav-item active" aria-current="page">Inicio</router-link>-->
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Estudiantes</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Catedraticos</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Grados</a>
                    </li>
                    <li class="nav-item active">
                        <router-link exact-active-class="active" to="/nivels" class="nav-link">Niveles</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link exact-active-class="active" to="/sucursals" class="nav-link">Sucursales</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="carouselImage" class="carousel slide my-4 mx-5" data-ride="carousel" >
            <ol class="carousel-indicators">
                <li data-target="#carouselImage" data-slide-to="0" class="active"></li>
                <li data-target="#carouselImage" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" id="imageCarusel">
                <div class="carousel-item active">
                    <img src="img/img1.jpg" class="d-block w-100" alt="..."  />
                </div>
                <div class="carousel-item">
                    <img src="img/img2.jpg" class="d-block w-100" alt="..."  />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselImage" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselImage" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
export default {}
</script>
