<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Catedratico extends Model
{
    use HasFactory;
    protected $table = 'catedratico';
    protected $fillable = ['id','carnet_catedratico','nombre_catedratico','fecha_nacimiento', 'direccion', 'telefono','correo', 'id_sucursal'];
    public $timestamps = false;
}
