<template>

    <div class="row">
        <br>
        <br>
        <br>
        <br>
        <div class="col-12 mb-2">
            <router-link :to='{name:"crearNivel"}' class="btn btn-outline-secondary"><i class="fa fa-book  fa-2x">Nuevo Nivel</i></router-link>
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
                        <th>Grado</th>
                        <th>Opciones</th>


                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="nivel in nivels" :key="nivel.id">
                        <td>{{ nivel.id }}</td>
                        <td>{{ nivel.nombre_nivel }}</td>
                        <td>{{ nivel.id_grado }}</td>






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
                alert('Nivel Mostrado con exito.')

            }).catch(error=>{
                console.log(error)
                this.nivels = []
            })
        },
        borrarNivel(id){
            if(confirm("¿Confirma eliminar el Nivel?")){
                this.axios.delete(`/api/nivel/${id}`).then(response=>{
                    this.mostrarNivels()
                    alert('Nivel eliminado con exito.')

                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
