<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class AlumnoController extends Controller
{
    public function index()
    {

        $alumnos = DB::table('alumno as al')
            ->join('sucursal as su','al.id_sucursal','=','su.id')
            ->select('al.id','al.carnet_alumno','al.nombre_alumno','al.direccion','al.fecha_nacimiento','al.telefono','al.correo','su.nombre_sucursal')->get();
        return response()->json($alumnos);
    }
    public function create()
    {

        //


    }



    public function store(Request $request)
    {
        $alumno = Alumno::create($request->post());
        return response()->json([
            'alumno'=>$alumno,
            'mensaje'=>'¡Alumno ingresado correctamente!'



        ]);

    }
    public function show(Alumno $alumno)
    {


        return response()->json($alumno);


    }
    public function edit(Alumno $alumno)
    {

        //


    }
    public function update(Request $request, Alumno $alumno)
    {


        $alumno->fill($request->post())->save();
        return response()->json([
            'alumno'=>$alumno
        ]);


    }
    public function destroy(Alumno $alumno)
    {


        $alumno->delete();
        return response()->json([
            'mensaje'=>'¡Alumno eliminado correctamente!'
        ]);



    }
    public function deleteAlumno($id){
        $alumno= $this->getAlumno($id);
        $alumno->delete();
        $alumno1 = response()->json([
            'mensaje'=>'¡Alumno eliminado correctamente!'
        ]);
        return [$alumno, $alumno1];

    }
    public function getAlumno($id)
    {
        $alumno = Alumno::find($id);

        return $alumno;

    }
    public function getAlumno1($id)
    {
        $alumno = Alumno::find($id);
        $alumno1 = response()->json([
            'mensaje'=>'¡Alumno OBtenido correctamente!'
        ]);
        return [$alumno,$alumno1];

    }

    public function editAlumno($id, Request $request){
        $alumno = $this->getAlumno($id);
        $alumno->fill($request->all())->save();
        $alumno1 = response()->json([
            'mensaje'=>'¡Alumno Editado correctamente!'
        ]);
        return [$alumno,$alumno1];
    }
}
