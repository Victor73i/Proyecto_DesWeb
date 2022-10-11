<template>
    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> EDITAR GRADO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="actualizar">

                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="nombre" v-model="grado.nombre_grado" required>
                    </div>

                    <br>
                    <button type="submit" class="btn btn-primary" >Guardar</button>
                    <router-link :to='{name:"mostrarGrados"}' class="btn btn-secondary">Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-grado",
    data(){
        return {
            grado:{
                nombre_grado:""
            }
        }
    },
    mounted(){
        this.mostrarGrado()
    },
    methods:{
        async mostrarGrado(){
            await this.axios.get(`/api/grado/${this.$route.params.id}`).then(response=>{
                const { nombre_grado } = response.data
                this.grado.nombre_grado = nombre_grado




            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/grado/${this.$route.params.id}`,this.grado).then(response=>{
                this.$router.push({name:"mostrarGrados"})
                alert('Grado editado con exito.')
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
