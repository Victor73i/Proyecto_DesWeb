<template>
    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> EDITAR SUCURSAL &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="actualizar">

                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="name" v-model="sucursal.nombre_sucursal" required>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary" >Guardar</button> <router-link :to='{name:"mostrarSucursals"}' class="btn btn-secondary">Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-sucursal",
    data(){
        return {
            sucursal:{
                nombre_sucursal:""

            }
        }
    },
    mounted(){
        this.mostrarSucursal()
    },
    methods:{
        async mostrarSucursal(){
            await this.axios.get(`/api/sucursal/${this.$route.params.id}`).then(response=>{
                const { nombre_sucursal } = response.data
                this.sucursal.nombre_sucursal = nombre_sucursal


            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/sucursal/${this.$route.params.id}`,this.sucursal).then(response=>{
                this.$router.push({name:"mostrarSucursals"})
                alert('Sucursal editado con exito.')

            }).catch(error=>{
                console.log(error)
            })
        }

}
}
</script>
