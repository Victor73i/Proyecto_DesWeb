<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SucursalController;
use App\Http\Controllers\NivelController;



Route::resource('sucursal',App\Http\Controllers\SucursalController::class);
Route::resource('nivel',App\Http\Controllers\NivelController::class);

Route::resource('catedratico',App\Http\Controllers\CatedraticoController::class);
Route::resource('curso',App\Http\Controllers\CursoController::class);
Route::resource('grado',App\Http\Controllers\GradoController::class);
Route::resource('alumno',App\Http\Controllers\AlumnoController::class);



//Modificion de API

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
//CATEDRATICO
Route::get('getcatedratico', [\App\Http\Controllers\CatedraticoController::class, 'index'])->name('api-getAll');
Route::get('getcatedratico/{id}', [\App\Http\Controllers\CatedraticoController::class, 'getCatedratico1'])->name('api-getAllid');
Route::delete('deletecatedratico/{id}', [\App\Http\Controllers\CatedraticoController::class, 'deleteCatedratico'])->name('api-delete');
Route::post('savecatedratico', [App\Http\Controllers\CatedraticoController::class, 'store'])->name('api-saveCatedratico');
Route::put('editcatedratico/{id}', [App\Http\Controllers\CatedraticoController::class, 'editCatedratico'])->name('api-editCatedratico');
//CURSO
Route::get('getcurso', [\App\Http\Controllers\CursoController::class, 'index'])->name('api-getAll');
Route::get('getcurso/{id}', [\App\Http\Controllers\CursoController::class, 'getCurso1'])->name('api-getAllid');
Route::delete('deletecurso/{id}', [\App\Http\Controllers\CursoController::class, 'deleteCurso'])->name('api-delete');
Route::post('savecurso', [App\Http\Controllers\CursoController::class, 'store'])->name('api-saveCurso');
Route::put('editcurso/{id}', [App\Http\Controllers\CursoController::class, 'editCurso'])->name('api-editCurso');
//GRADO
Route::get('getgrado', [\App\Http\Controllers\GradoController::class, 'index'])->name('api-getAll');
Route::get('getgrado/{id}', [\App\Http\Controllers\GradoController::class, 'getGrado1'])->name('api-getAllid');
Route::delete('deletegrado/{id}', [\App\Http\Controllers\GradoController::class, 'deleteGrado'])->name('api-delete');
Route::post('savegrado', [App\Http\Controllers\GradoController::class, 'store'])->name('api-saveGrado');
Route::put('editgrado/{id}', [App\Http\Controllers\GradoController::class, 'editGrado'])->name('api-editGrado');
//ALUMNO
Route::get('getalumno', [\App\Http\Controllers\AlumnoController::class, 'index'])->name('api-getAll');
Route::get('getalumno/{id}', [\App\Http\Controllers\AlumnoController::class, 'getAlumno1'])->name('api-getAllid');
Route::delete('deletealumno/{id}', [\App\Http\Controllers\AlumnoController::class, 'deleteAlumno'])->name('api-delete');
Route::post('savealumno', [App\Http\Controllers\AlumnoController::class, 'store'])->name('api-saveAlumno');
Route::put('editalumno/{id}', [App\Http\Controllers\AlumnoController::class, 'editAlumno'])->name('api-editAlumno');



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

//CATEDRATICO
Route::get('getcatedratico1', [\App\Http\Controllers\CatedraticoController::class, 'index'])->name('api-getAll')->middleware('auth:sanctum');
Route::get('getcatedratico1/{id}', [\App\Http\Controllers\CatedraticoController::class, 'getCatedratico1'])->name('api-getAllid')->middleware('auth:sanctum');
Route::delete('deletecatedratico1/{id}', [\App\Http\Controllers\CatedraticoController::class, 'deleteCatedratico'])->name('api-delete')->middleware('auth:sanctum');
Route::post('savecatedratico1', [App\Http\Controllers\CatedraticoController::class, 'store'])->name('api-saveCatedratico')->middleware('auth:sanctum');
Route::put('editcatedratico1/{id}', [App\Http\Controllers\CatedraticoController::class, 'editCatedratico'])->name('api-editCatedratico')->middleware('auth:sanctum');
//CURSO
Route::get('getcurso1', [\App\Http\Controllers\CursoController::class, 'index'])->name('api-getAll')->middleware('auth:sanctum');
Route::get('getcurso1/{id}', [\App\Http\Controllers\CursoController::class, 'getCurso1'])->name('api-getAllid')->middleware('auth:sanctum');
Route::delete('deletecurso1/{id}', [\App\Http\Controllers\CursoController::class, 'deleteCurso'])->name('api-delete')->middleware('auth:sanctum');
Route::post('savecurso1', [App\Http\Controllers\CursoController::class, 'store'])->name('api-saveCurso')->middleware('auth:sanctum');
Route::put('editcurso1/{id}', [App\Http\Controllers\CursoController::class, 'editCurso'])->name('api-editCurso')->middleware('auth:sanctum');
//GRADO
Route::get('getgrado1', [\App\Http\Controllers\GradoController::class, 'index'])->name('api-getAll')->middleware('auth:sanctum');
Route::get('getgrado1/{id}', [\App\Http\Controllers\GradoController::class, 'getGrado1'])->name('api-getAllid')->middleware('auth:sanctum');
Route::delete('deletegrado1/{id}', [\App\Http\Controllers\GradoController::class, 'deleteGrado'])->name('api-delete')->middleware('auth:sanctum');
Route::post('savegrado1', [App\Http\Controllers\GradoController::class, 'store'])->name('api-saveGrado')->middleware('auth:sanctum');
Route::put('editgrado1/{id}', [App\Http\Controllers\GradoController::class, 'editGrado'])->name('api-editGrado')->middleware('auth:sanctum');
//ALUMNO
Route::get('getalumno1', [\App\Http\Controllers\AlumnoController::class, 'index'])->name('api-getAll')->middleware('auth:sanctum');
Route::get('getalumno1/{id}', [\App\Http\Controllers\AlumnoController::class, 'getAlumno1'])->name('api-getAllid')->middleware('auth:sanctum');
Route::delete('deletealumno1/{id}', [\App\Http\Controllers\AlumnoController::class, 'deleteAlumno'])->name('api-delete')->middleware('auth:sanctum');
Route::post('savealumno1', [App\Http\Controllers\AlumnoController::class, 'store'])->name('api-saveAlumno')->middleware('auth:sanctum');
Route::put('editalumno1/{id}', [App\Http\Controllers\AlumnoController::class, 'editAlumno'])->name('api-editAlumno')->middleware('auth:sanctum');





//RUTAS DEL SANCTUM DEL VIDEO DE YOUTUBE
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/userinfo', [AuthController::class, 'infouser'])->middleware('auth:sanctum');

//Aqui se pondra todas las apis de este producto
