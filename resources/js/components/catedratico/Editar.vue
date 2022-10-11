<template>
    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> EDITAR CATEDRATICO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="actualizar">

                    <div>
                        <b><label for="name" class="mt-2">CARNET</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="carnet" v-model="catedratico.carnet_catedratico" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">NOMBRE</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="nombre" v-model="catedratico.nombre_catedratico" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">TELEFONO</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="telefono" v-model="catedratico.telefono" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">CORREO</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="correo" v-model="catedratico.correo" required>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary" >Guardar</button> <router-link :to='{name:"mostrarCatedraticos"}' class="btn btn-secondary">Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-catedratico",
    data(){
        return {
            catedratico:{
                carnet_catedratico:"",
                nombre_catedratico:"",
                telefono:"",
                correo:""
            }
        }
    },
    mounted(){
        this.mostrarCatedratico()
    },
    methods:{
        async mostrarCatedratico(){
            await this.axios.get(`/api/catedratico/${this.$route.params.id}`).then(response=>{
                const { carnet_catedratico,nombre_catedratico,telefono,correo } = response.data
                this.catedratico.carnet_catedratico = carnet_catedratico
                this.catedratico.nombre_catedratico = nombre_catedratico
                this.catedratico.telefono = telefono
                this.catedratico.correo = correo



            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/catedratico/${this.$route.params.id}`,this.catedratico).then(response=>{
                this.$router.push({name:"mostrarCatedraticos"})
                alert('Catedratico editado con exito.')
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
