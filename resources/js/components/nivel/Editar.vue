<template>
    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> EDITAR NIVEL &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="actualizar">

                 <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="nombre" v-model="nivel.nombre_nivel" required>
                    </div>

                    <div class="col-span-6 sm:col-span-2">
                        <label for="id_grado" class="block text-sm font-medium text-gray-700">Grado</label>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="nivel.id_grado"

                        >
                            <option
                                v-for="grado in grados"
                                v-bind:value="grado.id"
                            >{{ grado.id }} {{ grado.nombre_grado }}</option>
                        </select>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary" >Guardar</button>
                    <router-link :to='{name:"mostrarNivels"}' class="btn btn-secondary">Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-nivel",
    data(){
        return {
            nivel:{
                nombre_nivel:"",
                id_grado:""
            },
            grados:[],
        }
    },

    mounted(){
        {this.mostrarNivel()}        {this.mostrarGrados()}

    },
    methods:{
        async mostrarGrados(){
            await this.axios.get('/api/grado').then(response=>{
                this.grados = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.grados = []
            })
        },
        async mostrarNivel(){
            await this.axios.get(`/api/nivel/${this.$route.params.id}`).then(response=>{
                const { nombre_nivel,id_grado } = response.data
                this.nivel.nombre_nivel = nombre_nivel
                this.nivel.id_grado = id_grado

            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/nivel/${this.$route.params.id}`,this.nivel).then(response=>{
                this.$router.push({name:"mostrarNivels"})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Nivel actualizado exitosamente ',
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
