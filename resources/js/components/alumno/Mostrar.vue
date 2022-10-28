<template>

    <div class="row">
        <div class="form-group">
            <label>Filtrado</label>
            <input type="text" v-model="filterField" class="form-control"></input>
        </div>
        <div class="form-group">
            <label>Sucursal</label>
            <input type="int" v-model="filterField1" ></input>
        </div>


        <div class="form-group">
            <label>Fecha de Nacimiento</label>
            <input type="date" v-model="filterField3" ></input>
        </div>
        <div class="col-12 mb-5">
            <router-link :to='{name:"crearAlumno"}' class="btn btn-outline-secondary"><i class="fa fa-plus fa-2x"> Nuevo Alumno</i></router-link>
            <router-link  to ="/alumno_inscritos" class="btn btn-outline-info" style="float: right;"> <i class="fa fa-address-book fa-2x" aria-hidden="true"> Alumnos Inscritos </i> </router-link>
        </div>
        <div class="col-12 mb-2">
            <button class="btn btn-success" style="float: right;" @click="descargarExcel()">Exportar</button>
        </div>
        <div class="col-12 m-0 p-0">
            <div class="table-responsive"  >
                <table class="table table-bordered border-dark" style="background-color: #F3F0E7; ">
                    <thead class="bg-dark text-white" STYLE="background-color: #67DECD;">
                    <tr>
                        <th>ID</th>
                        <th>Carnet</th>
                        <th>Nombre</th>
                        <th>Fecha de Nacimiento</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Sucursal</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  v-if="filter(alumno)" v-for="alumno in alumnos" :key="alumno.id">
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
import exportFromJSON from 'export-from-json';
export default {
    name:"alumnos",
    data(){
        return {
            alumnos:[],
            filterField:'',
            filterField1:"",
            filterField3:"",


        }
    },
    mounted(){
        this.mostrarAlumnos()
    },
    methods:{
        filter(alumno){
            console.log(alumno.carnet_alumno+""+this.filterField+""+this.filterField1)

            var show = true
            if(alumno.carnet_alumno.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0 && alumno.nombre_alumno.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0 && alumno.direccion.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0 )
                show =false

            else if(alumno.fecha_nacimiento.toLocaleLowerCase().indexOf(this.filterField3.toLocaleLowerCase())<0)
                show =false
            else if(alumno.nombre_sucursal.toLocaleLowerCase().indexOf(this.filterField1.toLocaleLowerCase())<0)//alumno_inscrito.fecha.toLocaleLowerCase().indexOf(this.filterField1.toLocaleLowerCase())<0)
                show = false
            return show
        },
        async mostrarAlumnos(){
            await this.axios.get('/api/alumno').then(response=>{
                this.alumnos = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.alumnos = []
            })
        },
        borrarAlumno(id){
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
                    this.axios.delete(`/api/alumno/${id}`).then(response=>{
                        this.mostrarAlumnos()
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
            const data = this.alumnos;
            const fileName = 'alumnos_registrados';
            const exportType = exportFromJSON.types.xls;
            exportFromJSON({data, fileName, exportType})
        }
    }
}
</script>
