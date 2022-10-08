<template>
    <div class="row">
        <div class="col-12">
           <center><div class="card text-bg-light mb-3" style="max-width: 35rem; background-color: #67DECD;"  >
                <div class="card-header"><h4>Nueva Sucursal</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <br>
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="sucursal.nombre_sucursal" placeholder="Ingrese su Nombre" required>
                                </div>


                            </div>

                            <br>
                            <br>
                            <div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Guardar</button>    <router-link :to='{name:"mostrarSucursals"}' class="btn btn-warning">Lista</router-link>

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
    name:"crear-sucursal",
    data(){
        return {
            sucursal:{
                nombre_sucursal:""


            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/sucursal',this.sucursal).then(response=>{
                this.$router.push({name:"mostrarSucursals"})
                alert('Sucursal creado con exito.')

            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
