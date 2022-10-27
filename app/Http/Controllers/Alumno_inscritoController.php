<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Alumno;
use App\Models\Alumno_inscrito;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Alumno_inscritoController extends Controller
{
    public function index()
    {

        $alumno_inscritos = DB::table('alumno_inscrito as ai')

            ->join('alumno as al','ai.id_alumno','=','al.id')
            ->join('sucursal as su','al.id_sucursal','=','su.id')

            ->join('curso as cu','ai.id_curso','=','cu.id')
            ->join('nivel as ni','ai.id_nivel','=','ni.id')
            ->select('ai.id','al.nombre_alumno','su.nombre_sucursal','cu.nombre_curso','ni.nombre_nivel','ai.fecha','ai.nota')->get();


        return response()->json($alumno_inscritos);
    }
    public function create()
    {

        //


    }



    public function store(Request $request)
    {
        $alumno_inscrito = Alumno_inscrito::create($request->post());
        return response()->json([
            'alumno_inscrito'=>$alumno_inscrito,
            'mensaje'=>'¡Alumno Inscrito ingresado correctamente!'



        ]);

    }
    public function show(Alumno_inscrito $alumno_inscrito)
    {


        return response()->json($alumno_inscrito);


    }
    public function edit(Alumno_inscrito $alumno_inscrito)
    {

        //


    }
    public function update(Request $request, Alumno_inscrito $alumno_inscrito)
    {


        $alumno_inscrito->fill($request->post())->save();
        return response()->json([
            'alumno_inscrito'=>$alumno_inscrito
        ]);


    }
    public function destroy(Alumno_inscrito $alumno_inscrito)
    {


        $alumno_inscrito->delete();
        return response()->json([
            'mensaje'=>'¡Alumno Inscrito eliminado correctamente!'
        ]);



    }
    public function deleteAlumno_inscrito($id){
        $alumno_inscrito= $this->getAlumno_inscrito($id);
        $alumno_inscrito->delete();
        $alumno_inscrito1 = response()->json([
            'mensaje'=>'¡Alumno Inscrito eliminado correctamente!'
        ]);
        return [$alumno_inscrito, $alumno_inscrito1];

    }
    public function getAlumno_inscrito($id)
    {
        $alumno_inscrito = Alumno_inscrito::find($id);

        return $alumno_inscrito;

    }
    public function getAlumno_inscrito1($id)
    {
        $alumno_inscrito = Alumno_inscrito::find($id);
        $alumno_inscrito1 = response()->json([
            'mensaje'=>'¡Alumno Inscrito OBtenido correctamente!'
        ]);
        return [$alumno_inscrito,$alumno_inscrito1];

    }

    public function editAlumno_inscrito($id, Request $request){
        $alumno_inscrito = $this->getAlumno_inscrito($id);
        $alumno_inscrito->fill($request->all())->save();
        $alumno_inscrito1 = response()->json([
            'mensaje'=>'¡Alumno Inscrito Editado correctamente!'
        ]);
        return [$alumno_inscrito,$alumno_inscrito1];
    }
}
