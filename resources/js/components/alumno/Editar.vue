<template>
    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> EDITAR ALUMNO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="actualizar">

                    <div>
                        <b><label for="name" class="mt-2">Carnet</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="carnet" v-model="alumno.carnet_alumno" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="nombre" v-model="alumno.nombre_alumno" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Fecha de Nacimiento</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="fecha_nacimiento" v-model="alumno.fecha_nacimiento" required>
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
                        <input type="email" class="form-control" autocomplete="off" name="correo" v-model="alumno.correo" >
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Sucursal</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="sucursal" v-model="alumno.id_sucursal" required>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary" >Guardar</button>
                    <router-link :to='{name:"mostrarAlumnos"}' class="btn btn-secondary">Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-alumno",
    data(){
        return {
            alumno:{
                carnet_alumno:"",
                nombre_alumno:"",
                fecha_nacimiento:"",
                direccion:"",
                telefono:"",
                correo:"",
                id_sucursal:""

            }
        }
    },
    mounted(){
        this.mostrarAlumno()
    },
    methods:{
        async mostrarAlumno(){
            await this.axios.get(`/api/alumno/${this.$route.params.id}`).then(response=>{
                const { carnet_alumno,nombre_alumno,fecha_nacimiento,direccion,telefono,correo,id_sucursal } = response.data
                this.alumno.carnet_alumno = carnet_alumno
                this.alumno.nombre_alumno = nombre_alumno
                this.alumno.fecha_nacimiento = fecha_nacimiento
                this.alumno.direccion = direccion
                this.alumno.telefono = telefono
                this.alumno.correo = correo
                this.alumno.id_sucursal = id_sucursal

            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/alumno/${this.$route.params.id}`,this.alumno).then(response=>{
                this.$router.push({name:"mostrarAlumnos"})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Alumno actualizado exitosamente ',
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
