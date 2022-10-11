<template>

    <div class="row">
        <br>
        <br>
        <br>
        <br>
        <div class="col-12 mb-2">
            <router-link :to='{name:"crearCatedratico"}' class="btn btn-outline-secondary"><i class="fa fa-book  fa-2x">Nuevo Catedratico</i></router-link>
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
                        <th>Telefono</th>
                        <th>Correo</th>


                        <th>ACTIONS</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="catedratico in catedraticos" :key="catedratico.id">
                        <td>{{ catedratico.id }}</td>
                        <td>{{ catedratico.carnet_catedratico }}</td>
                        <td>{{ catedratico.nombre_catedratico }}</td>
                        <td>{{ catedratico.telefono }}</td>
                        <td>{{ catedratico.correo }}</td>





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
                alert('Catedratico Mostrado con exito.')

            }).catch(error=>{
                console.log(error)
                this.catedraticos = []
            })
        },
        borrarNivel(id){
            if(confirm("¿Confirma eliminar el Catedratico?")){
                this.axios.delete(`/api/catedratico/${id}`).then(response=>{
                    this.mostrarCatedraticos()
                    alert('Catedratico eliminado con exito.')

                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
