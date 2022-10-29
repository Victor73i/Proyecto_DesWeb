<template>

    <div class="row">
        <div class="form-group">
            <label>Busqueda de Informacion</label>
            <input type="text" v-model="filterField" class="form-control" placeholder="Catedratico, Curso, Nivel"></input>
            <label>Fecha de Nacimiento</label>
            <input type="date" class="form-control" placeholder="Fecha" v-model="filterField1" ></input>
        </div>


        <div class="col-12 mb-2">
            <router-link :to='{name:"crearAsigna_catedratico"}' class="btn btn-outline-secondary"><i class="fa fa-plus  fa-2x"> Asignar Catedrático</i></router-link>
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
                        <th>Catedratico</th>
                        <th>Curso</th>
                        <th>Nivel</th>
                        <th>Fecha</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  v-if="filter(asigna_catedratico)" v-for="asigna_catedratico in asigna_catedraticos" :key="asigna_catedratico.id">
                        <td>{{ asigna_catedratico.id }}</td>
                        <td>{{ asigna_catedratico.nombre_catedratico }}</td>
                        <td>{{ asigna_catedratico.nombre_curso }}</td>
                        <td>{{ asigna_catedratico.nombre_nivel }}</td>
                        <td>{{ asigna_catedratico.fecha }}</td>


                        <td>
                            <router-link :to='{name:"editarAsigna_catedratico",params:{id:asigna_catedratico.id}}' class="btn btn-outline-warning"><i class="fa fa-cog fa-spin fa-2x fa-fw"></i></router-link>
                            <a type="button" @click="borrarAsigna_catedratico(asigna_catedratico.id)" class="btn btn-outline-danger"><i class="fas fa-trash fa-2x"></i></a>
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
    name:"asigna_catedraticos",
    data(){
        return {
            asigna_catedraticos:[],
            filterField:"",

            filterField1:"",
        }
    },
    mounted(){
        this.mostrarAsigna_catedraticos()
        this.filter()
    },
    methods:{
        filter(asigna_catedratico){
            console.log(asigna_catedratico.nombre_catedratico+""+this.filterField+""+this.filterField1)

            var show = true
            if(asigna_catedratico.nombre_catedratico.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0 && asigna_catedratico.nombre_curso.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0 && asigna_catedratico.nombre_nivel.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0)
                show =false
            else if(asigna_catedratico.fecha.toLocaleLowerCase().indexOf(this.filterField1.toLocaleLowerCase())<0)
                show =false

            return show
        },
        async mostrarAsigna_catedraticos(){
            await this.axios.get('/api/asigna_catedratico').then(response=>{
                this.asigna_catedraticos = response.data
            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.asigna_catedraticos = []
            })
        },
        borrarAsigna_catedratico(id){
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
                    this.axios.delete(`/api/asigna_catedratico/${id}`).then(response=>{
                        this.mostrarAsigna_catedraticos()
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
            const data = this.asigna_catedraticos;
            const fileName = 'catedraticos_asignados';
            const exportType = exportFromJSON.types.xls;
            exportFromJSON({data, fileName, exportType})
        }
    }
}
</script>
