<?php

namespace App\Http\Controllers;

use App\Models\Catedratico;
use Illuminate\Http\Request;

class CatedraticoController extends Controller
{
    public function index()
    {



        $catedraticos = Catedratico::all(['id','carnet_catedratico','nombre_catedratico','telefono','correo']);
        return response()->json($catedraticos);

    }
    public function create()
    {

        //


    }



    public function store(Request $request)
    {



        $catedratico = Catedratico::create($request->post());
        return response()->json([
            'catedratico'=>$catedratico,
            'mensaje'=>'¡Catedratico ingresado correctamente!'




        ]);

    }





    public function show(Catedratico $catedratico)
    {


        return response()->json($catedratico);


    }
    public function edit(Catedratico $catedratico)

    {

        //


    }



    public function update(Request $request, Catedratico $catedratico)
    {


        $catedratico->fill($request->post())->save();
        return response()->json([
            'catedratico'=>$catedratico

        ]);


    }



    public function destroy(Catedratico $catedratico)
    {


        $catedratico->delete();
        return response()->json([
            'mensaje'=>'¡Catedratico eliminado correctamente!'
        ]);



    }



    public function deleteCatedratico($id){
        $catedratico= $this->getCatedratico($id);
        $catedratico->delete();
        $catedratico1 = response()->json([
            'mensaje'=>'¡Catedratico eliminado correctamente!'
        ]);
        return [$catedratico, $catedratico1];

    }
    public function getCatedratico($id)
    {
        $catedratico = Catedratico::find($id);

        return $catedratico;

    }
    public function getCatedratico1($id)
    {
        $catedratico = Catedratico::find($id);
        $catedratico1 = response()->json([
            'mensaje'=>'¡Catedratico OBtenido correctamente!'
        ]);
        return [$catedratico,$catedratico1];

    }

    public function editCatedratico($id, Request $request){
        $catedratico = $this->getCatedratico($id);
        $catedratico->fill($request->all())->save();
        $catedratico1 = response()->json([
            'mensaje'=>'¡Catedratico Editado correctamente!'
        ]);
        return [$catedratico,$catedratico1];
    }
}
