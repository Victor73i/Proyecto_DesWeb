<template>

    <div class="row">
        <div class="col-12 mb-5">
            <router-link :to='{name:"crearNivel"}' class="btn btn-outline-secondary"><i class="fa fa-plus  fa-2x"> Nuevo Nivel</i></router-link>
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
                        <th>Grado</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="nivel in nivels" :key="nivel.id">
                        <td>{{ nivel.id }}</td>
                        <td>{{ nivel.nombre_nivel }}</td>
                        <td>{{ nivel.nombre_grado}}</td>

                        <td>
                            <router-link :to='{name:"editarNivel",params:{id:nivel.id}}' class="btn btn-outline-warning"><i class="fa fa-cog fa-spin fa-2x fa-fw"></i></router-link>
                            <a type="button" @click="borrarNivel(nivel.id)" class="btn btn-outline-danger"><i class="fas fa-trash fa-2x"></i></a>
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
    name:"nivels",
    data(){
        return {
            nivels:[]
        }
    },
    mounted(){
        this.mostrarNivels()
    },
    methods:{
        async mostrarNivels(){
            await this.axios.get('/api/nivel').then(response=>{
                this.nivels = response.data


            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.nivels = []
            })
        },
        borrarNivel(id){
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
                    this.axios.delete(`/api/nivel/${id}`).then(response=>{
                        this.mostrarNivels()
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
            const data = this.nivels;
            const fileName = 'niveles';
            const exportType = exportFromJSON.types.xls;
            exportFromJSON({data, fileName, exportType})
        }
    }
}
</script>
