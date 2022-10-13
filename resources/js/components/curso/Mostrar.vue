<template>

    <div class="row">
        <br>
        <br>
        <br>
        <br>
        <div class="col-12 mb-2">
            <router-link :to='{name:"crearCurso"}' class="btn btn-outline-secondary"><i class="fa fa-book  fa-2x">Nuevo Curso</i></router-link>
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
                alert('Curso Mostrado con exito.')

            }).catch(error=>{
                console.log(error)
                this.cursos = []
                console.log(error)

            })
        },
        borrarCurso(id){
            if(confirm("¿Confirma eliminar el Curso?")){
                this.axios.delete(`/api/curso/${id}`).then(response=>{
                    this.mostrarCursos()
                    alert('Curso eliminado con exito.')

                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
