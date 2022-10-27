<template>

    <div class="row">
        <div class="col-12 mb-5">
            <router-link :to='{name:"crearCurso"}' class="btn btn-outline-secondary"><i class="fa fa-plus  fa-2x"> Nuevo Curso</i></router-link>
        </div>
        <div class="col-12 mb-2">
            <button class="btn btn-success" style="float: right;" @click="descargarExcel()">Exportar</button>
        </div>
        <div class="col-12"  >
            <div class="table-responsive"  >
                <table class="table table-bordered border-dark" style="background-color: #F3F0E7; ">
                    <thead class="bg-dark text-white" STYLE="background-color: #67DECD;">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="curso in cursos" :key="curso.id">
                        <td>{{ curso.id }}</td>
                        <td>{{ curso.nombre_curso }}</td>

                        <td>
                            <router-link :to='{name:"editarCurso",params:{id:curso.id}}' class="btn btn-outline-warning"><i class="fa fa-cog fa-spin fa-2x fa-fw"></i></router-link>
                            <a type="button" @click="borrarCurso(curso.id)" class="btn btn-outline-danger"><i class="fas fa-trash fa-2x"></i></a>
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
    name:"cursos",
    data(){
        return {
            cursos:[]
        }
    },
    mounted(){
        this.mostrarCursos()
    },
    methods:{
        async mostrarCursos(){
            await this.axios.get('/api/curso').then(response=>{
                this.cursos = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.cursos = []


            })
        },
        borrarCurso(id){
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
                    this.axios.delete(`/api/curso/${id}`).then(response=>{
                        this.mostrarCursos()
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
            const data = this.cursos;
            const fileName = 'cursos';
            const exportType = exportFromJSON.types.xls;
            exportFromJSON({data, fileName, exportType})
        }
    }
}
</script>
