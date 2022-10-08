<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SucursalController;



Route::resource('sucursal',App\Http\Controllers\SucursalController::class);


//Aqui se pondra todas las apis de este producto
