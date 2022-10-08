<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SucursalController;



Route::resource('sucursal',App\Http\Controllers\SucursalController::class);

//SIN UTILIZAR LA APLICACION DE SANCTUM EN SANCTUM
Route::get('getsucursal', [\App\Http\Controllers\SucursalController::class, 'index'])->name('api-getAll');
Route::get('getsucursal/{id}', [\App\Http\Controllers\SucursalController::class, 'getSucursal1'])->name('api-getAllid');
Route::delete('deletesucursal/{id}', [\App\Http\Controllers\SucursalController::class, 'deleteSucursal'])->name('api-delete');
Route::post('savesucursal', [App\Http\Controllers\SucursalController::class, 'store'])->name('api-saveSucursal');
Route::put('editsucursal/{id}', [App\Http\Controllers\SucursalController::class, 'editSucursal'])->name('api-editSucursal');


//UTILIZANDO LA APLICACION DE SANCTUM EN CUSTOMER
Route::get('getsucursal1', [\App\Http\Controllers\SucursalController::class, 'index'])->name('api-getAll')->middleware('auth:sanctum');
Route::get('getsucursal1/{id}', [\App\Http\Controllers\SucursalController::class, 'getSucursal1'])->name('api-getAllid')->middleware('auth:sanctum');
Route::delete('deletesucursal1/{id}', [\App\Http\Controllers\SucursalController::class, 'deleteSucursal'])->name('api-delete')->middleware('auth:sanctum');
Route::post('savesucursal1', [App\Http\Controllers\SucursalController::class, 'store'])->name('api-saveSucursal')->middleware('auth:sanctum');
Route::put('editsucursal1/{id}', [App\Http\Controllers\SucursalController::class, 'editSucursal'])->name('api-editSucursal')->middleware('auth:sanctum');

//RUTAS DEL SANCTUM DEL VIDEO DE YOUTUBE
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/userinfo', [AuthController::class, 'infouser'])->middleware('auth:sanctum');








//Aqui se pondra todas las apis de este producto
