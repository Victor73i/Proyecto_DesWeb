<?php

namespace App\Http\Controllers;


use App\Models\Curso;
use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function index()
    {
        $cursos = Curso::all(['id','nombre_curso']);
        return response()->json($cursos);
    }
    public function create()
    {

        //PROYECTO 2.0


    }



    public function store(Request $request)
    {
        $curso = Curso::create($request->post());
        return response()->json([
            'curso'=>$curso,
            'mensaje'=>'¡Curso ingresado correctamente!'



        ]);

    }
    public function show(Curso $curso)
    {


        return response()->json($curso);


    }
    public function edit(Curso $curso)
    {

        //


    }
    public function update(Request $request, Curso $curso)
    {


        $curso->fill($request->post())->save();
        return response()->json([
            'curso'=>$curso
        ]);


    }
    public function destroy(Curso $curso)
    {


        $curso->delete();
        return response()->json([
            'mensaje'=>'¡Curso eliminado correctamente!'
        ]);



    }
    public function deleteCurso($id){
        $curso= $this->getCurso($id);
        $curso->delete();
        $curso1 = response()->json([
            'mensaje'=>'¡Curso eliminado correctamente!'
        ]);
        return [$curso, $curso1];

    }
    public function getCurso($id)
    {
        $curso = Curso::find($id);

        return $curso;

    }
    public function getCurso1($id)
    {
        $curso = Curso::find($id);
        $curso1 = response()->json([
            'mensaje'=>'¡Curso Obtenido correctamente!'
        ]);
        return [$curso,$curso1];

    }

    public function editCurso($id, Request $request){
        $curso = $this->getCurso($id);
        $curso->fill($request->all())->save();
        $curso1 = response()->json([
            'mensaje'=>'¡Curso Editado correctamente!'
        ]);
        return [$curso,$curso1];
    }
}
