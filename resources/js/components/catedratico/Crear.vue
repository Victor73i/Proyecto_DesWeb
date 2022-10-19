
<template>

    <div class="container md mt-2 mb-3 col-lg-6">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> AGREGAR CATEDRÁTICO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="crear">

                    <div>
                        <b><label for="name" class="mt-2">Carnet</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="carnet_catedratico" v-model="catedratico.carnet_catedratico" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="nombre_catedratico" v-model="catedratico.nombre_catedratico" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Fecha de Nacimiento</label></b>
                        <input type="date" class="form-control" autocomplete="off" name="fecha_nacimiento" v-model="catedratico.fecha_nacimiento" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Dirección</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="direccion" v-model="catedratico.direccion" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Teléfono</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="telefono" v-model="catedratico.telefono" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Correo</label></b>
                        <input type="email" class="form-control" autocomplete="off" name="correo" v-model="catedratico.correo" required>
                    </div>

                    <div>
                        <b><label for="name" class="mt-2">Sucursal</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="sucursal" v-model="catedratico.id_sucursal" required>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary" >💾 Guardar</button>
                    <router-link :to='{name:"mostrarCatedraticos"}' class="btn btn-secondary">✖ Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">🧹 Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"crear-catedratico",
    data(){
        return {
            catedratico:{
                carnet_catedratico:"",
                nombre_catedratico:"",
                fecha_nacimiento: "",
                direccion: "",
                telefono:"",
                correo:"",
                id_sucursal:"",

            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/catedratico',this.catedratico).then(response=>{
                this.$router.push({name:"mostrarCatedraticos"})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Catedrático registrado exitosamente ',
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
