<?php

namespace App\Http\Controllers;

use App\Models\Sucursal;
use Illuminate\Http\Request;

class SucursalController extends Controller
{
    public function index()
    {
        $sucursals = Sucursal::all(['id','nombre_sucursal']);
        return response()->json($sucursals);
    }
    public function create()
    {

        //


    }



    public function store(Request $request)
    {
        $sucursal = Sucursal::create($request->post());
        return response()->json([
            'sucursal'=>$sucursal,
            'mensaje'=>'¡Sucursal ingresado correctamente!'



        ]);

    }
    public function show(Sucursal $sucursal)
    {


        return response()->json($sucursal);


    }
    public function edit(Sucursal $sucursal)
    {

        //


    }
    public function update(Request $request, Sucursal $sucursal)
    {


        $sucursal->fill($request->post())->save();
        return response()->json([
            'sucursal'=>$sucursal
        ]);


    }
    public function destroy(Sucursal $sucursal)
    {


        $sucursal->delete();
        return response()->json([
            'mensaje'=>'¡Sucursal eliminado correctamente!'
        ]);



    }
    public function deleteSucursal($id){
        $sucursal= $this->getSucursal($id);
        $sucursal->delete();
        $sucursal1 = response()->json([
            'mensaje'=>'¡Sucursal eliminado correctamente!'
        ]);
        return [$sucursal, $sucursal1];

    }
    public function getSucursal($id)
    {
        $sucursal = Sucursal::find($id);

        return $sucursal;

    }
    public function getSucursal1($id)
    {
        $sucursal = Sucursal::find($id);
        $sucursal1 = response()->json([
            'mensaje'=>'¡Sucursal OBtenido correctamente!'
        ]);
        return [$sucursal,$sucursal1];

    }

    public function editSucursal($id, Request $request){
        $sucursal = $this->getSucursal($id);
        $sucursal->fill($request->all())->save();
        $sucursal1 = response()->json([
            'mensaje'=>'¡Sucursal Editado correctamente!'
        ]);
        return [$sucursal,$sucursal1];
    }
}
