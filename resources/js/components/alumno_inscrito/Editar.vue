<template>
    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> EDITAR ALUMNO INSCRITO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="actualizar">

                    <div>
                       <b><label for="id_alumno" class="mt-2">Alumno</label></b>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"

                        >
                            <option
                                v-for="alumno in alumnos"
                                v-bind:value="alumno.id"
                            >{{ alumno.nombre_alumno }}{{" "}}{{ alumno.carnet_alumno }}</option>
                        </select>
                    </div>
                    <div>
                        <b><label for="id_curso" class="mt-2">Curso</label></b>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="alumno_inscrito.id_curso"

                        >
                            <option
                                v-for="curso in cursos"
                                v-bind:value="curso.id"
                            >{{ curso.nombre_curso }}</option>
                        </select>
                    </div>
                    <div>
                        <b><label for="id_nivel" class="mt-2">Nivel</label></b>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="alumno_inscrito.id_nivel"

                        >
                            <option
                                v-for="nivel in nivels"
                                v-bind:value="nivel.id"
                            >{{ nivel.nombre_nivel }}</option>
                        </select>
                    </div>
                    <div>
                        <b><label for="fecha" class="mt-2">Fecha</label></b>
                        <input type="date" class="form-control" autocomplete="off" name="fecha" v-model="alumno_inscrito.fecha">
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Nota</label></b>
                        <input type="number" class="form-control" autocomplete="off" name="fecha" v-model="alumno_inscrito.nota">
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary" >???? Guardar</button>
                    <router-link :to='{name:"mostrarAlumno_inscritos"}' class="btn btn-secondary">??? Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">???? Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-alumno_inscrito",
    data(){
        return {
            alumno_inscrito:{
                id_alumno:"",
                id_curso:"",
                id_nivel:"",

                fecha:"",
                nota:"",
            },
            alumnos:[],
            cursos:[],
            nivels:[],

        }
    },
    mounted(){
        {this.mostrarAlumno_inscrito()}{this.mostrarAlumnos()}{this.mostrarCursos()}{this.mostrarNivels()}
    },
    methods:{
        async mostrarAlumnos(){
            await this.axios.get('/api/alumno').then(response=>{
                this.alumnos = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.alumnos = []
            })
        },
        async mostrarCursos(){
            await this.axios.get('/api/curso').then(response=>{
                this.cursos = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.cursos = []
            })
        },
        async mostrarNivels(){
            await this.axios.get('/api/nivel').then(response=>{
                this.nivels = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.nivels = []
            })
        },
        async mostrarAlumno_inscrito(){
            await this.axios.get(`/api/asigna_catedratico/${this.$route.params.id}`).then(response=>{
                const { id_alumno,id_curso,id_nivel,fecha,nota } = response.data
                this.alumno_inscrito.id_alumno = id_alumno
                this.alumno_inscrito.id_curso = id_curso
                this.alumno_inscrito.id_nivel = id_nivel
                this.alumno_inscrito.fecha = fecha
                this.alumno_inscrito.nota = nota


            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/alumno_inscrito/${this.$route.params.id}`,this.alumno_inscrito).then(response=>{
                this.$router.push({name:"mostrarAlumno_inscritos"})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Alumno actualizado exitosamente ',
                    showConfirmButton: false,
                    timer: 2000
                })
            }).catch(error=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
        }
    }
}
</script>
