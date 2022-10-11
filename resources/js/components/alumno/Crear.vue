
<template>

    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> AGREGAR ALUMNO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="crear">

                    <div>
                        <b><label for="name" class="mt-2">CARNET</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="carnet" v-model="alumno.carnet_alumno" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">NOMBRE</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="name" v-model="alumno.nombre_alumno" required>
                    </div>
                    <div>
                            <b><label for="name" class="mt-2">Fecha Nacimiento</label></b>
                        <input type="date" class="form-control" autocomplete="off" name="fecha_nacimiento" v-model="alumno.fecha_nacimiento" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">Direccion</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="direccion" v-model="alumno.direccion" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">TELEFONO</label></b>
                        <input type="number" class="form-control" autocomplete="off" name="telefono" v-model="alumno.telefono" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">CORREO</label></b>
                        <input type="email" class="form-control" autocomplete="off" name="correo" v-model="alumno.correo" required>
                    </div>
                    <div>
                        <b><label for="name" class="mt-2">SUCURSAL</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="correo" v-model="alumno.id_sucursal" required>
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
    name:"crear-alumno",
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



            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/alumno',this.alumno).then(response=>{
                this.$router.push({name:"mostrarAlumnos"})
                alert('Alumno creado con exito.')
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}

</script>
