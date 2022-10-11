<?php

namespace App\Http\Controllers;

use App\Models\Nivel;
use Illuminate\Http\Request;

class NivelController extends Controller
{
    public function index()
    {
        $nivels = Nivel::all(['id','nombre_nivel','id_grado']);
        return response()->json($nivels);
    }
    public function create()
    {

        //


    }



    public function store(Request $request)
    {
        $nivel = Nivel::create($request->post());
        return response()->json([
            'nivel'=>$nivel,
            'mensaje'=>'¡Nivel ingresado correctamente!'



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


        $nivel->fill($request->post())->save();
        return response()->json([
            'nivel'=>$nivel
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
