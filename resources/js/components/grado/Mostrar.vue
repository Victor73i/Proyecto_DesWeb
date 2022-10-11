<template>

    <div class="row">
        <br>
        <br>
        <br>
        <br>
        <div class="col-12 mb-2">
            <router-link :to='{name:"crearGrado"}' class="btn btn-outline-secondary"><i class="fa fa-book  fa-2x">Nuevo Grado</i></router-link>
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

                        <th>ACTIONS</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="grado in grados" :key="grado.id">
                        <td>{{ grado.id }}</td>
                        <td>{{ grado.nombre_grado }}</td>





                        <td>
                            <router-link :to='{name:"editarGrado",params:{id:grado.id}}' class="btn btn-outline-warning"><i class="fa fa-cog fa-spin fa-2x fa-fw"></i></router-link>
                            <a type="button" @click="borrarGrado(grado.id)" class="btn btn-outline-danger"><i class="fas fa-trash fa-2x"></i></a>
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
    name:"grados",
    data(){
        return {
            grados:[]
        }
    },
    mounted(){
        this.mostrarGrados()
    },
    methods:{
        async mostrarGrados(){
            await this.axios.get('/api/grado').then(response=>{
                this.grados = response.data
                alert('Grado Mostrado con exito.')

            }).catch(error=>{
                console.log(error)
                this.grados = []
            })
        },
        borrarGrado(id){
            if(confirm("¿Confirma eliminar el Grado?")){
                this.axios.delete(`/api/grado/${id}`).then(response=>{
                    this.mostrarGrados()
                    alert('Grado eliminado con exito.')

                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
