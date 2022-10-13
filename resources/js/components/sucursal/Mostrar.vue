<template>

    <div class="row">
        <br>
        <br>
        <br>
        <br>
        <div class="col-12 mb-2">
            <router-link :to='{name:"crearSucursal"}' class="btn btn-outline-secondary"><i class="fa fa-book  fa-2x">Nueva Sucursal</i></router-link>
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
                        <th>Nombre</th>

                        <th>Opciones</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="sucursal in sucursals" :key="sucursal.id">
                        <td>{{ sucursal.id }}</td>
                        <td>{{ sucursal.nombre_sucursal }}</td>





                        <td>
                            <router-link :to='{name:"editarSucursal",params:{id:sucursal.id}}' class="btn btn-outline-warning"><i class="fa fa-cog fa-spin fa-2x fa-fw"></i></router-link>
                            <a type="button" @click="borrarSucursal(sucursal.id)" class="btn btn-outline-danger"><i class="fas fa-trash fa-2x"></i></a>
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
    name:"sucursals",
    data(){
        return {
            sucursals:[]
        }
    },
    mounted(){
        this.mostrarSucursals()
    },
    methods:{
        async mostrarSucursals(){
            await this.axios.get('/api/sucursal').then(response=>{
                this.sucursals = response.data
                alert('Sucursal Mostrado con exito.')

            }).catch(error=>{
                console.log(error)
                this.sucursals = []
            })
        },
        borrarSucursal(id){
            if(confirm("¿Confirma eliminar la Sucursal?")){
                this.axios.delete(`/api/sucursal/${id}`).then(response=>{
                    this.mostrarSucursals()
                    alert('Sucursal eliminado con exito.')

                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
