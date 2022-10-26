
<template>

    <div class="container md mt-2 mb-3 col-lg-6">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> AGREGAR ALUMNO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="crear">

                    <div>
                        <b><label for="name" class="mt-2">Carnet</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="carnet" v-model="alumno.carnet_alumno" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="name" v-model="alumno.nombre_alumno" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Fecha de Nacimiento</label></b>
                        <input type="date" class="form-control" autocomplete="off" name="fecha_nacimiento" v-model="alumno.fecha_nacimiento" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Dirección</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="direccion" v-model="alumno.direccion" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Teléfono</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="telefono" v-model="alumno.telefono" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Correo</label></b>
                        <input type="email" class="form-control" autocomplete="off" name="correo" v-model="alumno.correo" required>
                    </div>
                    <div>
                        <b> <label for="id_sucursal" class="mt-2">Sucursal</label></b>
                        <select
                            class="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            :required="true"
                            v-model="alumno.id_sucursal">
                            <option disabled value="">-- Seleccione una opción --</option>
                            <option v-for="sucursal in sucursals" v-bind:value="sucursal.id">{{ sucursal.nombre_sucursal }}</option>
                        </select>
                    </div>

                    <br>
                    <button type="submit" class="btn btn-primary" >💾 Guardar</button>
                    <router-link :to='{name:"mostrarAlumnos"}' class="btn btn-secondary">✖ Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">🧹 Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {


    data(){
        return {
            alumno:{
                carnet_alumno:"",
                nombre_alumno:"",
                fecha_nacimiento:"",
                direccion:"",
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



    name:"crear-alumno",

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
            await this.axios.post('/api/alumno',this.alumno).then(response=>{
                this.$router.push({name:"mostrarAlumnos"})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Alumno registrado exitosamente ',
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

