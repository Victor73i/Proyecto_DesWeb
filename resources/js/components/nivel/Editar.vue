<template>
    <div class="row">
        <div class="col-12">
            <center><div class="card text-bg-light mb-3" style="max-width: 35rem; background-color: #67DECD;">
                <div class="card-header"><h4>Editar Nivel</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <br>
                                <div class="form-group">
                                    <label>Nombre Nivel</label>
                                    <input type="text" class="form-control" v-model="nivel.nombre_nivel" placeholder="Ingrese el nombre" required>
                                </div>
                                <br>

                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </center></div>
    </div>
</template>

<script>
export default {
    name:"editar-nivel",
    data(){
        return {
            nivel:{
                nombre_nivel:""

            }
        }
    },
    mounted(){
        this.mostrarNivel()
    },
    methods:{
        async mostrarNivel(){
            await this.axios.get(`/api/nivel/${this.$route.params.id}`).then(response=>{
                const { nombre_nivel } = response.data
                this.nivel.nombre_nivel = nombre_nivel


            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/nivel/${this.$route.params.id}`,this.nivel).then(response=>{
                this.$router.push({name:"mostrarNivels"})
                alert('Nivel editado con exito.')

            }).catch(error=>{
                console.log(error)
            })
        }

}
}
</script>
