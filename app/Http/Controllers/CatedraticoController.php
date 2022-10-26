<?php

namespace App\Http\Controllers;

use App\Models\Catedratico;
use App\Models\Sucursal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CatedraticoController extends Controller
{
    public function index()
    {



        $catedraticos = DB::table('catedratico as ca')
            ->join('sucursal as su','ca.id_sucursal','=','su.id')
            ->select('ca.id','ca.carnet_catedratico','ca.nombre_catedratico','ca.fecha_nacimiento','ca.direccion','ca.telefono','ca.correo','su.nombre_sucursal')->get();

        return response()->json($catedraticos);

    }
    public function create()
    {

        //


    }



    public function store(Request $request)
    {


        $catedratico = Catedratico::create($request->post());
        $sucursal = Sucursal::All();
        return response()->json([
            'catedratico'=>$catedratico,
            'sucursal'=>$sucursal,
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
