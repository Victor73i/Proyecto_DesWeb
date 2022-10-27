<template>

    <div class="col-12 m-0 p-0"  >
        <h1>Deseas buscar por Escuela y Grado</h1>
        <input type="text" v-model="search1" v-on:keyup.enter="searchData" placeholder="Buscar Escuela">
        <input type="text" v-model="search" v-on:keyup.enter="searchData" placeholder="Buscar Grado">
        <input type="date" v-model="search4" v-on:keyup.enter="searchData" placeholder="Buscar Escuela">
        <input type="date" v-model="search5" v-on:keyup.enter="searchData" placeholder="Buscar Grado">

        <h1>Deseas buscar por Escuela o Grado</h1>
        <input type="text" v-model="search2" v-on:keyup.enter="searchData1" placeholder="Buscar Escuela">
        <input type="text" v-model="search3" v-on:keyup.enter="searchData1" placeholder="Buscar Grado">


        <div class="table-responsive"  >
            <table class="table table-bordered border-dark" style="background-color: #F3F0E7; ">
                <thead class="bg-dark text-white" STYLE="background-color: #67DECD;">
                <tr>
                    <th>ID</th>
                    <th>Grades</th>

                    <th>Escuela</th>
                    <th>Municipio</th>



                </tr>
                </thead>
                <tbody>
                              <tr v-for="students in student" :key="students.id">
                    <td>{{students.id}}</td>
                    <td>{{students.grades}}</td>

                    <td>{{students.name}}</td>
                    <td>{{students.municipality_id}}</td>





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
           todos: null,
           student:null,
           search: null,
           search1: null,
           search2: null,
           search3: null,
           search4: null,
           search5: null,


       }
   },
    mounted(){
       console.log('Hola mundo desde mounted')
        this.getTodos();
    },
    methods:{
        getTodos(){
            axios
            .get('http://sicoep.org/api/students_by_school')
                    .then(response =>{
                        console.log(response)
                        this.todos = response.data
                    })
                    .catch(e=>console.log(e))

        },
        searchData(){
            if(this.search1 && this.search && this.search4 && this.search5) {
                axios
                    .get('http://sicoep.org/api/students_by_school?school=' + this.search1 + '&grade=' + this.search + '&dateStart='  + this.search4 + '&dateEnd=' + this.search5)
                    .then((res) => {
                        this.student = res.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
             else{
            }
            alert("Tecla enter presionada");
        },
        searchData1(){
           if(this.search2) {
                axios
                    .get('http://sicoep.org/api/students_by_school?school=' + this.search2)
                    .then((res) => {
                        this.student = res.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }  if(this.search3) {
                axios
                    .get('http://sicoep.org/api/students_by_school?grade=' + this.search3)
                    .then((res) => {
                        this.student = res.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else{
            }
            alert("Tecla enter presionada");
        }
    }


}
</script>
<style></style>
