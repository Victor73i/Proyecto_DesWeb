<template>
    <div class="col-12 m-0 p-0"  >
        <center><h3>¿Deseas buscar por Municipalidad y Departamento?</h3></center>
        <div class="input-group mb-3" >
        <input class="form-control" type="text" v-model="search1" v-on:keyup.enter="searchData" placeholder="Buscar Municipalidad">
        <input class="form-control" type="text" v-model="search" v-on:keyup.enter="searchData" placeholder="Buscar Departamento">
        <input class="form-control" type="date" v-model="search4" v-on:keyup.enter="searchData" placeholder="Buscar Date inicio">
        <input class="form-control" type="date" v-model="search5" v-on:keyup.enter="searchData" placeholder="Buscar Date Final">
        </div>

        <center><h3>¿Deseas buscar por Municipalidad o Departamento?</h3></center>
        <div class="input-group mb-3" >
        <input class="form-control" type="text" v-model="search2" v-on:keyup.enter="searchData1" placeholder="Buscar Municipalidad">
        <input class="form-control" type="text" v-model="search3" v-on:keyup.enter="searchData1" placeholder="Buscar Departamento">
        </div>
        <div class="col-12 mb-2">
            <button class="btn btn-success" style="float: right;" @click="descargarExcel()">Exportar</button>
        </div>
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
                <tr v-for="students in student" :key="students.id">
                    <td>{{students.id}}</td>

                    <td>{{students.count_student_enrollments}}</td>
                    <td>{{students.name}}</td>





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
            .get('https://sicoep.org/api/students_by_department_municipality')
                    .then(response =>{
                        console.log(response)
                        this.todos = response.data
                    })
                    .catch(e=>console.log(e))

        }
        ,
        searchData() {
            if (this.search1 && this.search && this.search4 && this.search5) {
                axios
                    .get('https://sicoep.org/api/students_by_department_municipality?municipality=' + this.search1 + '&department=' + this.search + '&dateStart=' + this.search4 + '&dateEnd=' + this.search5)
                    .then((res) => {
                        this.student = res.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
            }
            alert("Mostrando Datos");
        },
        searchData1() {
            if (this.search2) {
                axios
                    .get('https://sicoep.org/api/students_by_department_municipality?municipality=' + this.search2)
                    .then((res) => {
                        this.student = res.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
            if (this.search3) {
                axios
                    .get('https://sicoep.org/api/students_by_department_municipality?department=' + this.search3)
                    .then((res) => {
                        this.student = res.data
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
            }
            alert("Mostrando Datos");
        },
        descargarExcel(){
            const data = this.student;
            const fileName = 'SICOEP_ESTUDIANTES';
            const exportType = exportFromJSON.types.xls;
            exportFromJSON({data, fileName, exportType})
        }

    }

}
</script>
<style></style>
