<template>
    <div class="col-12 m-0 p-0"  >
        <div class="table-responsive"  >
            <table class="table table-bordered border-dark" style="background-color: #F3F0E7; ">
                <thead class="bg-dark text-white" STYLE="background-color: #67DECD;">
                <tr>
                    <th>ID</th>
                    <th>Estudiante Enrolados</th>
                    <th>Municipio</th>



                </tr>
                </thead>
                <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                    <td>{{todo.id}}</td>

                    <td>{{todo.count_student_enrollments}}</td>
                    <td>{{todo.name}}</td>





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
            .get('http://sicoep.org/api/students_by_department_municipality')
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
