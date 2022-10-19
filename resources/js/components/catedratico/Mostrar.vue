<template>
    <div class="row">

        <div class="col-12 mb-5">
            <router-link :to='{name:"crearCatedratico"}' class="btn btn-outline-secondary"><i class="fa fa-plus  fa-2x"> Nuevo Catedrático</i></router-link>
            <router-link  to ="/" class="btn btn-outline-info" style="float: right;"> <i class="fa fa-address-book fa-2x" aria-hidden="true"> Catedráticos Asignados </i> </router-link>
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
                    <tr v-for="catedratico in catedraticos" :key="catedratico.id">
                        <td>{{ catedratico.id }}</td>
                        <td>{{ catedratico.carnet_catedratico }}</td>
                        <td>{{ catedratico.nombre_catedratico }}</td>
                        <td>{{ catedratico.fecha_nacimiento }}</td>
                        <td>{{ catedratico.direccion }}</td>
                        <td>{{ catedratico.telefono }}</td>
                        <td>{{ catedratico.correo }}</td>
                        <td>{{ catedratico.nombre_sucursal }}</td>
                        <td>
                            <router-link :to='{name:"editarCatedratico",params:{id:catedratico.id}}' class="btn btn-outline-warning"><i class="fa fa-cog fa-spin fa-2x fa-fw"></i></router-link>
                            <a type="button" @click="borrarCatedratico(catedratico.id)" class="btn btn-outline-danger"><i class="fas fa-trash fa-2x"></i></a>
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
    name:"catedraticos",
    data(){
        return {
            catedraticos:[]
        }
    },
    mounted(){
        this.mostrarCatedraticos()
    },
    methods:{
        async mostrarCatedraticos(){
            await this.axios.get('/api/catedratico').then(response=>{
                this.catedraticos = response.data

            }).catch(error=>{
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Ha ocurrido un error',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.catedraticos = []
            })
        },
        borrarCatedratico(id){
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
                    this.axios.delete(`/api/catedratico/${id}`).then(response=>{
                        this.mostrarCatedraticos()
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

        }
    }
}
</script>
