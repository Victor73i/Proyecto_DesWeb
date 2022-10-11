<?php

namespace App\Http\Controllers;

use App\Models\Grado;
use Illuminate\Http\Request;

class GradoController extends Controller
{
    public function index()
    {
        $grados = Grado::all(['id','nombre_grado']);
        return response()->json($grados);
    }
    public function create()
    {

        //


    }



    public function store(Request $request)
    {
        $grado = Grado::create($request->post());
        return response()->json([
            'grado'=>$grado,
            'mensaje'=>'¡Grado ingresado correctamente!'



        ]);

    }
    public function show(Grado $grado)
    {


        return response()->json($grado);


    }
    public function edit(Grado $grado)
    {

        //


    }
    public function update(Request $request, Grado $grado)
    {


        $grado->fill($request->post())->save();
        return response()->json([
            'grado'=>$grado
        ]);


    }
    public function destroy(Grado $grado)
    {


        $grado->delete();
        return response()->json([
            'mensaje'=>'¡Grado eliminado correctamente!'
        ]);



    }
    public function deleteGrado($id){
        $grado= $this->getGrado($id);
        $grado->delete();
        $grado1 = response()->json([
            'mensaje'=>'¡Grado eliminado correctamente!'
        ]);
        return [$grado, $grado1];

    }
    public function getGrado($id)
    {
        $grado = Grado::find($id);

        return $grado;

    }
    public function getGrado1($id)
    {
        $grado = Grado::find($id);
        $grado1 = response()->json([
            'mensaje'=>'¡Grado OBtenido correctamente!'
        ]);
        return [$grado,$grado1];

    }

    public function editGrado($id, Request $request){
        $grado = $this->getGrado($id);
        $grado->fill($request->all())->save();
        $grado1 = response()->json([
            'mensaje'=>'¡Grado Editado correctamente!'
        ]);
        return [$grado,$grado1];
    }
}
