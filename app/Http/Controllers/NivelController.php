<?php

namespace App\Http\Controllers;

use App\Models\Nivel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NivelController extends Controller
{
    public function index()
    {
        $nivels = DB::table('nivel as ni')
            ->join('grado as gr','ni.id_grado','=','gr.id')
            ->select('ni.id','ni.nombre_nivel','gr.nombre_grado')->get();
        return response()->json($nivels);
    }
    public function create()
    {

        //


    }



    public function store(Request $request)
    {
        $grados = DB::table('nivel as ni')
            ->join('grado as gr','ni.id_grado','=','gr.id')
            ->select('ni.id','ni.nombre_nivel','gr.nombre_grado')->get();
        $nivel = Nivel::create($request->post());
        return response()->json([
            'nivel'=>$nivel,
            'mensaje'=>'¡Nivel ingresado correctamente!',$grados



        ]);

    }
    public function show(Nivel $nivel)
    {


        return response()->json($nivel);


    }
    public function edit(Nivel $nivel)
    {

        //


    }
    public function update(Request $request, Nivel $nivel)
    {

        $grados = DB::table('nivel as ni')
            ->join('grado as gr','ni.id_grado','=','gr.id')
            ->select('ni.id','ni.nombre_nivel','gr.nombre_grado')->get();
        $nivel->fill($request->post())->save();
        return response()->json([
            'nivel'=>$nivel,$grados
        ]);


    }
    public function destroy(Nivel $nivel)
    {


        $nivel->delete();
        return response()->json([
            'mensaje'=>'¡Nivel eliminado correctamente!'
        ]);



    }
    public function deleteNivel($id){
        $nivel= $this->getNivel($id);
        $nivel->delete();
        $nivel1 = response()->json([
            'mensaje'=>'¡Nivel eliminado correctamente!'
        ]);
        return [$nivel, $nivel1];

    }
    public function getNivel($id)
    {
        $nivel = Nivel::find($id);

        return $nivel;

    }
    public function getNivel1($id)
    {
        $nivel = Nivel::find($id);
        $nivel1 = response()->json([
            'mensaje'=>'¡Nivell OBtenido correctamente!'
        ]);
        return [$nivel,$nivel1];

    }

    public function editNivel($id, Request $request){
        $nivel = $this->getNivel($id);
        $nivel->fill($request->all())->save();
        $nivel1 = response()->json([
            'mensaje'=>'¡Nivel Editado correctamente!'
        ]);
        return [$nivel,$nivel1];
    }
}
