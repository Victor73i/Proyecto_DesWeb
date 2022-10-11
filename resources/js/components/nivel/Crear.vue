<template>
    <div class="row">
        <div class="col-12">
           <center><div class="card text-bg-light mb-3" style="max-width: 35rem; background-color: #67DECD;"  >
                <div class="card-header"><h4>Nuevo Nivel</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <br>
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="nivel.nombre_nivel" placeholder="Ingrese el Nombre" required>
                                </div>
                                <div class="form-group">
                                    <label>Grado</label>
                                    <input type="text" class="form-control" v-model="nivel.id_grado" placeholder="Ingrese el Nombre" required>
                                </div>


                            </div>

                            <br>
                            <br>
                            <div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Guardar</button>    <router-link :to='{name:"mostrarNivels"}' class="btn btn-warning">Lista</router-link>

                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
           </center>
        </div>
    </div>

</template>

<script>
export default {
    name:"crear-nivel",
    data(){
        return {
            nivel:{
                nombre_nivel:"",
                id_grado:""



            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/nivel',this.nivel).then(response=>{
                this.$router.push({name:"mostrarNivels"})
                alert('Nivel creado con exito.')

            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
