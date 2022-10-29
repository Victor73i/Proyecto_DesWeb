<template>

    <div class="col-12 m-0 p-0"  >
        <div class="form-group">
            <label>Fecha</label>
            <input type="date" v-model="filterField" class="form-control" placeholder="Fecha"></input>
            <label>Busqueda de Informacion</label>
            <input type="text" class="form-control" placeholder="Carga, Contenedor, Accion" v-model="filterField1" ></input>
        </div>
        <div>
            <label>Busqueda de Informacion</label>
            <input type="text" class="form-control" placeholder="Destino, Procedencia" v-model="filterField2" ></input>
        </div>
        <div>
            <label>Cabezal</label>
            <input type="text" class="form-control" placeholder="Cabezal, Placa, Marca" v-model="filterField3" ></input>
        </div>
        <div>
            <label>Busqueda de Informacion</label>
            <input type="text" class="form-control" placeholder="Transportista, Piloto, Bodega" v-model="filterField4" ></input>
        </div>
        <div class="col-12 mb-2">
            <button class="btn btn-success" style="float: right;" @click="descargarExcel()">Exportar</button>
            <br>
        </div>

        <div class="table-responsive"  >
            <table class="table table-bordered border-dark" style="background-color: #F3F0E7; ">
                <thead class="bg-dark text-white" STYLE="background-color: #67DECD;">
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>

                    <th>Carga</th>
                    <th>Numero de Contenedor</th>
                    <th>Tipo Accion </th>
                    <th>Destino Nombre</th>
                    <th>Procedencia </th>
                    <th>Nombre de Usuario </th>

                    <th>Cabezal </th>
                    <th>Cabezal Placa</th>
                    <th>Cabezal Marca</th>
                    <th>Transportista</th>
                    <th>Piloto</th>
                    <th>Bodega</th>









                </tr>
                </thead>
                <tbody>
                              <tr v-if="filter(todo)" v-for="todo in todos" :key="todo.id">
                    <td>{{todo.id}}</td>
                    <td>{{todo.fecha}}</td>

                    <td>{{todo.carga}}</td>
                    <td>{{todo.numero_contenedor}}</td>
                                  <td>{{todo.tipoAccionName}}</td>
                                  <td>{{todo.destinoName}}</td>

                                  <td>{{todo.procedenciaName}}</td>
                                  <td>{{todo.userName}}1</td>

                                  <td>{{todo.cabezalName}}</td>
                                  <td>{{todo.cabezal.placa}}</td>
                                  <td>{{todo.cabezal.marca}}</td>


                                  <td>{{todo.transportistaName}}</td>
                                  <td>{{todo.pilotoName}}</td>
                                  <td>{{todo.bodegaDestino}}</td>








                              </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import exportFromJSON from "export-from-json";
export default {
   data(){
       return{
           todos: [],
           student:null,
           search: null,
           search1: null,
           search2: null,
           search3: null,
           search4: null,
           search5: null,

           filterField:'',
           filterField1:"",

           filterField2:"",
           filterField3:"",
           filterField4:"",
           usuario:{
               email:"grupo2@gmail.com",
               password:"12345678",

           }

       }
   },
    mounted(){
       console.log('Hola mundo desde mounted')
        this.getLogin()
        this.getTodos()
        this.filter()


    },
    methods:{
        filter(todo){
            console.log(todo.name+""+this.filterField+""+this.filterField1)

            var show = true
       if(todo.fecha.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0)
                show =false
           else if(todo.carga.toLocaleLowerCase().indexOf(this.filterField1.toLocaleLowerCase())<0 && todo.numero_contenedor.toLocaleLowerCase().indexOf(this.filterField1.toLocaleLowerCase())<0 && todo.tipoAccionName.toLocaleLowerCase().indexOf(this.filterField1.toLocaleLowerCase())<0)
                show =false

       else if(todo.destinoName.toLocaleLowerCase().indexOf(this.filterField2.toLocaleLowerCase())<0 && todo.procedenciaName.toLocaleLowerCase().indexOf(this.filterField2.toLocaleLowerCase())<0 )
           show =false
       else if(todo.cabezalName.toLocaleLowerCase().indexOf(this.filterField3.toLocaleLowerCase())<0 && todo.cabezal.placa.toLocaleLowerCase().indexOf(this.filterField3.toLocaleLowerCase())<0 && todo.cabezal.marca.toLocaleLowerCase().indexOf(this.filterField3.toLocaleLowerCase())<0)
           show =false
       else if(todo.transportistaName.toLocaleLowerCase().indexOf(this.filterField4.toLocaleLowerCase())<0 && todo.pilotoName.toLocaleLowerCase().indexOf(this.filterField4.toLocaleLowerCase())<0 && todo.bodegaDestino.toLocaleLowerCase().indexOf(this.filterField4.toLocaleLowerCase())<0)
           show =false

            return show
        },
       getLogin(){

               axios.defaults.headers.common = {Authorization:`Bearer 32|HpS4i5W9vaF1vqhG6GjFHaTEgvQV2pgKY6OPi8kz`};


       },
        getTodos(){
            axios
            .get('https://obscure-temple-55797.herokuapp.com/api/accion')
                    .then(response =>{
                        console.log(response)
                        this.todos = response.data
                    })
                    .catch(e=>console.log(e))

        },

        descargarExcel(){
            const data = this.todos;
            const fileName = 'Transportista_SA';
            const exportType = exportFromJSON.types.xls;
            exportFromJSON({data, fileName, exportType})
        }
    }


}
</script>
<style></style>
