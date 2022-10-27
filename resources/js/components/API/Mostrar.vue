<template>
    <div>
<table>
    <tbody>
    <tr v-for="todo in todos" :key="todo.id">

        <td>{{todo.id}}</td>

        <td>{{todo.name}}</td>
        <td>{{todo.municipality_id}}</td>




    </tr>
    </tbody>
</table>
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
