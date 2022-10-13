<template>

    <div class="row">
        <br>
        <br>
        <br>
        <br>
        <div class="col-12 mb-2">
            <router-link :to='{name:"crearAlumno"}' class="btn btn-outline-secondary"><i class="fa fa-book  fa-2x">Nuevo Alumno</i></router-link>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div class="col-12"  >
            <div class="table-responsive"  >
                <table class="table table-bordered border-dark" style="background-color: #F3F0E7; ">
                    <thead class="bg-dark text-white" STYLE="background-color: #67DECD;">
                    <tr>
                        <th>ID</th>
                        <th>Carnet</th>
                        <th>Nombre</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Direccion</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Sucursal</th>


                        <th>Opciones</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="alumno in alumnos" :key="alumno.id">
                        <td>{{ alumno.id }}</td>
                        <td>{{ alumno.carnet_alumno }}</td>
                        <td>{{ alumno.nombre_alumno }}</td>
                        <td>{{ alumno.fecha_nacimiento }}</td>
                        <td>{{ alumno.direccion }}</td>
                        <td>{{ alumno.telefono }}</td>
                        <td>{{ alumno.correo }}</td>
                        <td>{{ alumno.nombre_sucursal }}</td>






                        <td>
                            <router-link :to='{name:"editarAlumno",params:{id:alumno.id}}' class="btn btn-outline-warning"><i class="fa fa-cog fa-spin fa-2x fa-fw"></i></router-link>
                            <a type="button" @click="borrarAlumno(alumno.id)" class="btn btn-outline-danger"><i class="fas fa-trash fa-2x"></i></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"alumnos",
    data(){
        return {
            alumnos:[]
        }
    },
    mounted(){
        this.mostrarAlumnos()
    },
    methods:{
        async mostrarAlumnos(){
            await this.axios.get('/api/alumno').then(response=>{
                this.alumnos = response.data
                alert('Alumno Mostrado con exito.')

            }).catch(error=>{
                console.log(error)
                this.alumnos = []
            })
        },
        borrarAlumno(id){
            if(confirm("¿Confirma eliminar el Alumno?")){
                this.axios.delete(`/api/alumno/${id}`).then(response=>{
                    this.mostrarAlumnos()
                    alert('Alumno eliminado con exito.')

                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
