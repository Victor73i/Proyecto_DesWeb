
<template>

    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> AGREGAR ALUMNO INSCRITO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="crear">

                    <div class="col-span-6 sm:col-span-2">
                        <label for="id_alumno" class="block text-sm font-medium text-gray-700">Alumno</label>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="alumno_inscrito.id_alumno"

                        > <option disabled value="">-- Alumno --</option>
                            <option
                                v-for="alumno in alumnos"
                                v-bind:value="alumno.id"
                            >{{ alumno.id }} {{ alumno.nombre_alumno }}</option>
                        </select>
                    </div>
                    <div class="col-span-6 sm:col-span-2">
                        <label for="id_curso" class="block text-sm font-medium text-gray-700">Curso</label>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="alumno_inscrito.id_curso"

                        > <option disabled value="">-- Curso --</option>
                            <option
                                v-for="curso in cursos"
                                v-bind:value="curso.id"
                            >{{ curso.id }} {{ curso.nombre_curso }}</option>
                        </select>
                    </div>
                    <div class="col-span-6 sm:col-span-2">
                        <label for="id_nivel" class="block text-sm font-medium text-gray-700">Nivel</label>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="alumno_inscrito.id_nivel"

                        > <option disabled value="">-- Nivel --</option>
                            <option
                                v-for="nivel in nivels"
                                v-bind:value="nivel.id"
                            >{{ nivel.id }} {{ nivel.nombre_nivel }}</option>
                        </select>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Fecha</label></b>
                        <input type="date" class="form-control" autocomplete="off" name="fecha" v-model="alumno_inscrito.fecha">
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Nota</label></b>
                        <input type="number" class="form-control" autocomplete="off" name="fecha" v-model="alumno_inscrito.nota">
                    </div>

                    <br>
                    <button type="submit" class="btn btn-primary" >Guardar</button>
                    <router-link :to='{name:"mostrarAlumno_inscritos"}' class="btn btn-secondary">Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {


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
        {this.mostrarAlumnos()}{this.mostrarCursos()}{this.mostrarNivels()}
    },



    name:"crear-alumno_inscrito",

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
        async crear(){
            await this.axios.post('/api/alumno_inscrito',this.alumno_inscrito).then(response=>{
                this.$router.push({name:"mostrarAlumno_inscritos"})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Alumno registrado exitosamente ',
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

