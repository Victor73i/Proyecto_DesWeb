<template>

    <div class="col-12 m-0 p-0"  >
        <div class="form-group">
            <label>Busqueda de Informacion</label>
            <input type="text" v-model="filterField" class="form-control" placeholder="Name, Address"></input>
            <label>Nombre de Contacto</label>
            <input type="text" class="form-control" placeholder="Nombre de Contacto" v-model="filterField1" ></input>
        </div>
        <div>
            <label>Contacto</label>
            <input type="text" class="form-control" placeholder="Contacto number, Contacto email" v-model="filterField2" ></input>
        </div>


        <div class="table-responsive"  >
            <table class="table table-bordered border-dark" style="background-color: #F3F0E7; ">
                <thead class="bg-dark text-white" STYLE="background-color: #67DECD;">
                <tr>
                    <th>ID</th>
                    <th>Name</th>

                    <th>Address</th>
                    <th>Contacto_id</th>
                    <th>contactoName</th>
                    <th>Contacto Numero</th>
                    <th>Contacto Email</th>





                </tr>
                </thead>
                <tbody>
                <tr v-if="filter(todo)" v-for="todo in todos" :key="todo.id">
                    <td>{{todo.id}}</td>
                    <td>{{todo.name}}</td>

                    <td>{{todo.address}}</td>
                    <td>{{todo.contacto_id}}</td>

                                  <td>{{todo.contactoName}}</td>
                                  <td>{{todo.contacto.number}}</td>
                    <td>{{todo.contacto.email}}</td>





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
            if(todo.name.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0 && todo.address.toLocaleLowerCase().indexOf(this.filterField.toLocaleLowerCase())<0)
                show =false
            else if(todo.contactoName.toLocaleLowerCase().indexOf(this.filterField1.toLocaleLowerCase())<0)
                show =false
            else if(todo.contacto.number.toLocaleLowerCase().indexOf(this.filterField2.toLocaleLowerCase())<0 && todo.contacto.email.toLocaleLowerCase().indexOf(this.filterField2.toLocaleLowerCase())<0)
                show =false

            return show
        },
       getLogin(){

               axios.defaults.headers.common = {Authorization:`Bearer 32|HpS4i5W9vaF1vqhG6GjFHaTEgvQV2pgKY6OPi8kz`};


       },
        getTodos(){
            axios
            .get('https://obscure-temple-55797.herokuapp.com/api/transportista')
                    .then(response =>{
                        console.log(response)
                        this.todos = response.data
                    })
                    .catch(e=>console.log(e))

        },

        descargarExcel(){
            const data = this.todos;
            const fileName = 'Transportes_SA';
            const exportType = exportFromJSON.types.xls;
            exportFromJSON({data, fileName, exportType})
        }
    }


}
</script>
<style></style>
