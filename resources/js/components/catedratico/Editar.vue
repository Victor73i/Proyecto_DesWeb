<template>
    <div class="container md mt-2 mb-3 col-lg-6">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> EDITAR CATEDRÁTICO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="actualizar">

                    <div>
                        <b><label for="name" class="mt-2">Carnet</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="carnet" v-model="catedratico.carnet_catedratico" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="nombre" v-model="catedratico.nombre_catedratico" required>
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
                        <b><label for="id_sucursal" class="mt-2">Sucursal</label></b>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="catedratico.id_sucursal">
                            <option
                                v-for="sucursal in sucursals"
                                v-bind:value="sucursal.id"
                            >{{ sucursal.nombre_sucursal }}</option>
                        </select>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary" >💾 Guardar</button>
                    <router-link :to='{name:"mostrarCatedraticos"}' class="btn btn-secondary">✖ Cancelar</router-link>
                    <button type="reset" class="btn btn-danger" > 🧹 Limpiar</button>
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
                fecha_nacimiento:"",
                direccion:"",
                telefono:"",
                correo:"",
                id_sucursal:""
            }, sucursals:[],
        }
    },
    mounted(){
        {this.mostrarCatedratico()}{this.mostrarSucursals()}
    },
    methods:{
        async mostrarSucursals(){
            await this.axios.get('/api/sucursal').then(response=>{
                this.sucursals = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.sucursals = []
            })
        },
        async mostrarCatedratico(){
            await this.axios.get(`/api/catedratico/${this.$route.params.id}`).then(response=>{
                const { carnet_catedratico,nombre_catedratico,fecha_nacimiento,direccion,telefono,correo,id_sucursal } = response.data
                this.catedratico.carnet_catedratico = carnet_catedratico
                this.catedratico.nombre_catedratico = nombre_catedratico
                this.catedratico.fecha_nacimiento = fecha_nacimiento
                this.catedratico.direccion = direccion
                this.catedratico.telefono = telefono
                this.catedratico.correo = correo
                this.catedratico.id_sucursal = id_sucursal

            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/catedratico/${this.$route.params.id}`,this.catedratico).then(response=>{
                this.$router.push({name:"mostrarCatedraticos"})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Catedrático actualizado exitosamente ',
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
