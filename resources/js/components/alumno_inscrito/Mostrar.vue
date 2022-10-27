<template>

    <div class="row">
        <div class="col-12 mb-2">
            <router-link :to='{name:"crearAlumno_inscrito"}' class="btn btn-outline-secondary"><i class="fa fa-plus  fa-2x"> Inscribir Alumno</i></router-link>
        </div>
        <div class="col-12 mb-2">
            <button class="btn btn-success" style="float: right;" @click="descargarExcel()">Exportar</button>
        </div>
        <div class="col-12 m-0 p-0"  >
            <div class="table-responsive"  >
                <table class="table table-bordered border-dark" style="background-color: #F3F0E7; ">
                    <thead class="bg-dark text-white" STYLE="background-color: #67DECD;">
                    <tr>
                        <th>ID</th>
                        <th>Alumnos</th>
                        <th>Sucursal</th>

                        <th>Curso</th>
                        <th>Nivel</th>
                        <th>Fecha</th>
                        <th>Nota</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="alumno_inscrito in alumno_inscritos" :key="alumno_inscrito.id">
                        <td>{{ alumno_inscrito.id }}</td>
                        <td>{{ alumno_inscrito.nombre_alumno }}</td>
                        <td>{{ alumno_inscrito.nombre_sucursal }}</td>

                        <td>{{ alumno_inscrito.nombre_curso }}</td>
                        <td>{{ alumno_inscrito.nombre_nivel }}</td>
                        <td>{{ alumno_inscrito.fecha }}</td>
                        <td>{{ alumno_inscrito.nota }}</td>



                        <td>
                            <router-link :to='{name:"editarAlumno_inscrito",params:{id:alumno_inscrito.id}}' class="btn btn-outline-warning"><i class="fa fa-cog fa-spin fa-2x fa-fw"></i></router-link>
                            <a type="button" @click="borrarAlumno_inscrito(alumno_inscrito.id)" class="btn btn-outline-danger"><i class="fas fa-trash fa-2x"></i></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import exportFromJSON from 'export-from-json';
export default {
    name:"alumno_inscritos",
    data(){
        return {
            alumno_inscritos:[]
        }
    },
    mounted(){
        this.mostrarAlumno_inscritos()
    },
    methods:{
        async mostrarAlumno_inscritos(){
            await this.axios.get('/api/alumno_inscrito').then(response=>{
                this.alumno_inscritos = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.alumno_inscritos = []
            })
        },
        borrarAlumno_inscrito(id){
            Swal.fire({
                title: 'Deseas eliminar el registro?',
                text: "Si lo haces no podras recuperarlo!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.delete(`/api/alumno_inscrito/${id}`).then(response=>{
                        this.mostrarAlumno_inscritos()
                        Swal.fire(
                            'Eliminado!',
                            'El registro se ha eliminado',
                            'success'
                        )
                    }).catch(error=>{
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Este registro no puede ser eliminado',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    })
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    Swal.fire(
                        'Cancelado',
                        'El registro se encuentra a salvo',
                        'error'
                    )
                }
            })

        },
        descargarExcel(){
            const data = this.alumno_inscritos;
            const fileName = 'alumnos_inscritos';
            const exportType = exportFromJSON.types.xls;
            exportFromJSON({data, fileName, exportType})
        }
    }
}
</script>
