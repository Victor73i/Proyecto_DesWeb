<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Asigna_catedratico;
use App\Models\Catedratico;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Asigna_catedraticoController extends Controller
{
    public function index()
    {

        $asigna_catedraticos = DB::table('asigna_catedratico as as')
            ->join('catedratico as ca','as.id_catedratico','=','ca.id')
            ->join('curso as cu','as.id_curso','=','cu.id')
            ->join('nivel as ni','as.id_nivel','=','ni.id')
            ->select('as.id','ca.nombre_catedratico', 'cu.nombre_curso','ni.nombre_nivel','as.fecha')->get();

        return response()->json($asigna_catedraticos);

    }
    public function create()
    {

        //


    }



    public function store(Request $request)
    {


        $asigna_catedratico = Asigna_catedratico::create($request->post());
        return response()->json([
            'asigna_catedratico'=>$asigna_catedratico,
            'mensaje'=>'¡Catedratico ingresado correctamente!'




        ]);

    }





    public function show(Asigna_catedratico $asigna_catedratico)
    {


        return response()->json($asigna_catedratico);


    }
    public function edit(Asigna_catedratico $asigna_catedratico)

    {

        //


    }



    public function update(Request $request, Asigna_catedratico $asigna_catedratico)
    {

        $asigna_catedratico->fill($request->post())->save();
        return response()->json([
            'asigna_catedratico'=>$asigna_catedratico

        ]);


    }



    public function destroy(Asigna_catedratico $asigna_catedratico)
    {


        $asigna_catedratico->delete();
        return response()->json([
            'mensaje'=>'¡Catedratico eliminado correctamente!'
        ]);



    }



    public function deleteAsigna_catedratico($id){
        $asigna_catedratico= $this->getCatedratico($id);
        $asigna_catedratico->delete();
        $asigna_catedratico1 = response()->json([
            'mensaje'=>'¡Asignacion Catedratico eliminado correctamente!'
        ]);
        return [$asigna_catedratico, $asigna_catedratico1];

    }
    public function getAsigna_catedratico($id)
    {
        $asigna_catedratico = Asigna_catedratico::find($id);

        return $asigna_catedratico;

    }
    public function getAsigna_catedratico1($id)
    {
        $asigna_catedratico = Asigna_catedratico::find($id);
        $asigna_catedratico1 = response()->json([
            'mensaje'=>'¡Asigna Catedratico OBtenido correctamente!'
        ]);
        return [$asigna_catedratico,$asigna_catedratico1];

    }

    public function editAsigna_catedratico($id, Request $request){
        $asigna_catedratico = $this->getAsigna_catedratico($id);
        $asigna_catedratico->fill($request->all())->save();
        $asigna_catedratico1 = response()->json([
            'mensaje'=>'¡Asigna Catedratico Editado correctamente!'
        ]);
        return [$asigna_catedratico,$asigna_catedratico1];
    }
}
