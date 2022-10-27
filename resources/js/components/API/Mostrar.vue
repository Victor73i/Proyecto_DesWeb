<template>

    <div class="col-12 m-0 p-0"  >
        <div class="table-responsive"  >
            <table class="table table-bordered border-dark" style="background-color: #F3F0E7; ">
                <thead class="bg-dark text-white" STYLE="background-color: #67DECD;">
                <tr>
                    <th>ID</th>
                    <th>Escuela</th>
                    <th>Municipalidad</th>
                    <th>PROFESSOR</th>



                </tr>
                </thead>
                <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td>{{todo.id}}</td>

                    <td>{{todo.name}}</td>
                    <td>{{todo.municipality_id}}</td>

                    <td>{{todo.professors}}</td>




                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   data(){
       return{
           todos: null
       }
   },
    mounted(){
       console.log('Hola mundo desde mounted')
        this.getTodos();
    },
    methods:{
        getTodos(){
            axios
            .get('http://sicoep.org/api/students_by_professor')
                    .then(response =>{
                        console.log(response)
                        this.todos = response.data
                    })
                    .catch(e=>console.log(e))

        }
    }


}
</script>
<style></style>
