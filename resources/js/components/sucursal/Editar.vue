<template>
    <div class="row">
        <div class="col-12">
            <center><div class="card text-bg-light mb-3" style="max-width: 35rem; background-color: #67DECD;">
                <div class="card-header"><h4>Editar Sucursal</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <br>
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="sucursal.nombre_sucursal" placeholder="Ingrese el nombre" required>
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
    name:"editar-sucursal",
    data(){
        return {
            sucursal:{
                nombre_sucursal:""

            }
        }
    },
    mounted(){
        this.mostrarSucursal()
    },
    methods:{
        async mostrarSucursal(){
            await this.axios.get(`/api/sucursal/${this.$route.params.id}`).then(response=>{
                const { nombre_sucursal } = response.data
                this.sucursal.nombre_sucursal = nombre_sucursal


            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`/api/sucursal/${this.$route.params.id}`,this.sucursal).then(response=>{
                this.$router.push({name:"mostrarSucursals"})
                alert('Sucursal editado con exito.')

            }).catch(error=>{
                console.log(error)
            })
        }

}
}
</script>
