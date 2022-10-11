<template>
    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> EDITAR CURSO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="actualizar">

                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="carnet" v-model="curso.nombre_curso" required>
                    </div>

                    <br>
                    <button type="submit" class="btn btn-primary" >Guardar</button> <router-link :to='{name:"mostrarCursos"}' class="btn btn-secondary">Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"editar-curso",
    data(){
        return {
            curso:{
                nombre_curso:""
            }
        }
    },
    mounted(){
        this.mostrarCurso()
    },
    methods:{
        async mostrarCurso(){
            await this.axios.get(`/api/curso/${this.$route.params.id}`).then(response=>{
                const { nombre_curso } = response.data
                this.curso.nombre_curso = nombre_curso




            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/curso/${this.$route.params.id}`,this.curso).then(response=>{
                this.$router.push({name:"mostrarCursos"})
                alert('Curso editado con exito.')
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
