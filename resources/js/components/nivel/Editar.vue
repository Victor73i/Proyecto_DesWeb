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
                    <div>
                        <b><label for="name" class="mt-2">Grado</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="name" v-model="nivel.id_grado" required>
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
            }
        }
    },
    mounted(){
        this.mostrarNivel()
    },
    methods:{
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
