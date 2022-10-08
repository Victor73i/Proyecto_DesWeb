<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SucursalController;
use App\Http\Controllers\NivelController;



Route::resource('sucursal',App\Http\Controllers\SucursalController::class);
Route::resource('nivel',App\Http\Controllers\NivelController::class);


//SIN UTILIZAR LA APLICACION DE SANCTUM EN SANCTUM
//SUCURSAL
Route::get('getsucursal', [\App\Http\Controllers\SucursalController::class, 'index'])->name('api-getAll');
Route::get('getsucursal/{id}', [\App\Http\Controllers\SucursalController::class, 'getSucursal1'])->name('api-getAllid');
Route::delete('deletesucursal/{id}', [\App\Http\Controllers\SucursalController::class, 'deleteSucursal'])->name('api-delete');
Route::post('savesucursal', [App\Http\Controllers\SucursalController::class, 'store'])->name('api-saveSucursal');
Route::put('editsucursal/{id}', [App\Http\Controllers\SucursalController::class, 'editSucursal'])->name('api-editSucursal');
//NIVEL
Route::get('getnivel', [\App\Http\Controllers\NivelController::class, 'index'])->name('api-getAll');
Route::get('getnivel/{id}', [\App\Http\Controllers\NivelController::class, 'getNivel1'])->name('api-getAllid');
Route::delete('deletenivel/{id}', [\App\Http\Controllers\NivelController::class, 'deleteNivel'])->name('api-delete');
Route::post('savenivel', [App\Http\Controllers\NivelController::class, 'store'])->name('api-saveNivel');
Route::put('editnivel/{id}', [App\Http\Controllers\NivelController::class, 'editNivel'])->name('api-editNivel');

//UTILIZANDO LA APLICACION DE SANCTUM EN CUSTOMER
//Sucursal
Route::get('getsucursal1', [\App\Http\Controllers\SucursalController::class, 'index'])->name('api-getAll')->middleware('auth:sanctum');
Route::get('getsucursal1/{id}', [\App\Http\Controllers\SucursalController::class, 'getSucursal1'])->name('api-getAllid')->middleware('auth:sanctum');
Route::delete('deletesucursal1/{id}', [\App\Http\Controllers\SucursalController::class, 'deleteSucursal'])->name('api-delete')->middleware('auth:sanctum');
Route::post('savesucursal1', [App\Http\Controllers\SucursalController::class, 'store'])->name('api-saveSucursal')->middleware('auth:sanctum');
Route::put('editsucursal1/{id}', [App\Http\Controllers\SucursalController::class, 'editSucursal'])->name('api-editSucursal')->middleware('auth:sanctum');
//NIVEL

Route::get('getnivel1', [\App\Http\Controllers\NivelController::class, 'index'])->name('api-getAll')->middleware('auth:sanctum');
Route::get('getnivel1/{id}', [\App\Http\Controllers\NivelController::class, 'getNivel1'])->name('api-getAllid')->middleware('auth:sanctum');
Route::delete('deletenivel1/{id}', [\App\Http\Controllers\NivelController::class, 'deleteNivel'])->name('api-delete')->middleware('auth:sanctum');
Route::post('savenivel1', [App\Http\Controllers\NivelController::class, 'store'])->name('api-saveNivell')->middleware('auth:sanctum');
Route::put('editnivel1/{id}', [App\Http\Controllers\NivelController::class, 'editNivel'])->name('api-editNivel')->middleware('auth:sanctum');



//RUTAS DEL SANCTUM DEL VIDEO DE YOUTUBE
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/userinfo', [AuthController::class, 'infouser'])->middleware('auth:sanctum');








//Aqui se pondra todas las apis de este producto
