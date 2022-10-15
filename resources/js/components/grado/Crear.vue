
<template>

    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> AGREGAR GRADO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="crear">

                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="Nombre" v-model="grado.nombre_grado" required>
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
    name:"crear-grado",
    data(){
        return {
            grado:{
                nombre_grado:""

            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/grado',this.grado).then(response=>{
                this.$router.push({name:"mostrarGrados"})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Grado registrado exitosamente ',
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
