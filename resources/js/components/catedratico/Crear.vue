
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
                        <input type="text" class="form-control" autocomplete="off" name="carnet" v-model="catedratico.carnet_catedratico" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="name" v-model="catedratico.nombre_catedratico" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Teléfono</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="telefono" v-model="catedratico.telefono" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Correo</label></b>
                        <input type="email" class="form-control" autocomplete="off" name="correo" v-model="catedratico.correo" >
                    </div>
                    <div class="col-span-6 sm:col-span-2">
                        <label for="id_sucursal" class="block text-sm font-medium text-gray-700">Sucursal</label>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="catedratico.id_sucursal"

                        > <option disabled value="">-- Sucursal --</option>
                            <option
                                v-for="sucursal in sucursals"
                                v-bind:value="sucursal.id"
                            >{{ sucursal.id }} {{ sucursal.nombre_sucursal }}</option>
                        </select>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary" >Guardar</button>
                    <router-link :to='{name:"mostrarCatedraticos"}' class="btn btn-secondary">Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">Limpiar</button>
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
                telefono:"",
                correo:"",
                id_sucursal:"",

            },
            sucursals:[],
        }
    },

    mounted(){
        this.mostrarSucursals()
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
