<template>
    <div class="container md mt-2 mb-3 col-lg-6">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> EDITAR ASIGNACIÓN DE CATEDRÁTICO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="actualizar">

                    <div>
                        <b><label for="id_catedratico" class="mt-2">Catedrático</label></b>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="asigna_catedratico.id_catedratico"

                        >
                            <option
                                v-for="catedratico in catedraticos"
                                v-bind:value="catedratico.id"
                            >{{ catedratico.nombre_catedratico }}</option>
                        </select>
                    </div>
                    <div>
                        <b><label for="id_curso" class="mt-2">Curso</label></b>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="asigna_catedratico.id_curso"

                        > <
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
                            v-model="asigna_catedratico.id_nivel"

                        >
                            <option
                                v-for="nivel in nivels"
                                v-bind:value="nivel.id"
                            >{{ nivel.nombre_nivel }}</option>
                        </select>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Fecha</label></b>
                        <input type="date" class="form-control" autocomplete="off" name="fecha" v-model="asigna_catedratico.fecha">
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary" >💾 Guardar</button>
                    <router-link :to='{name:"mostrarAsigna_catedraticos"}' class="btn btn-secondary">✖ Cancelar</router-link>
                    <button type="reset" class="btn btn-danger" > 🧹 Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-asigna_catedratico",
    data(){
        return {
            asigna_catedratico:{
                id_catedratico:"",
                id_curso:"",
                id_nivel:"",

                fecha:"",
            },
            catedraticos:[],
            cursos:[],
            nivels:[],
        }
    },
    mounted(){
        {this.mostrarAsigna_catedratico()}{this.mostrarCatedraticos()}{this.mostrarCursos()}{this.mostrarNivels()}
    },
    methods:{
        async mostrarCatedraticos(){
            await this.axios.get('/api/catedratico').then(response=>{
                this.catedraticos = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.catedraticos = []
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
        async mostrarAsigna_catedratico(){
            await this.axios.get(`/api/asigna_catedratico/${this.$route.params.id}`).then(response=>{
                const { id_catedratico,id_curso,id_nivel,fecha } = response.data
                this.asigna_catedratico.id_catedratico = id_catedratico
                this.asigna_catedratico.id_curso = id_curso
                this.asigna_catedratico.id_nivel = id_nivel
                this.asigna_catedratico.fecha = fecha


            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/asigna_catedratico/${this.$route.params.id}`,this.asigna_catedratico).then(response=>{
                this.$router.push({name:"mostrarAsigna_catedraticos"})
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
