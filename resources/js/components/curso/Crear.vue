
<template>

    <div class="container md mt-2 mb-3 col-lg-5">
        <div class="card border-info">
            <div class="card-header bg-info text-white">
                <center><h2 class="mt-2 mb-2"> AGREGAR CURSO &nbsp;<i class="fas fa-pen-alt"></i></h2> </center>
            </div>
            <div class="card-body">
                <!-- Formulario -->
                <form @submit.prevent="crear">

                    <div>
                        <b><label for="name" class="mt-2">Nombre</label></b>
                        <input type="text" class="form-control" autocomplete="off" name="Nombre" v-model="curso.nombre_curso" required>
                    </div>

                    <br>
                    <button type="submit" class="btn btn-primary" >Guardar</button>
                    <router-link :to='{name:"mostrarCursos"}' class="btn btn-secondary">Cancelar</router-link>
                    <button type="reset" class="btn btn-danger">Limpiar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"crear-curso",
    data(){
        return {
            curso:{
                nombre_curso:""

            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/curso',this.curso).then(response=>{
                this.$router.push({name:"mostrarCursos"})
                alert('Curso creado con exito.')
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
