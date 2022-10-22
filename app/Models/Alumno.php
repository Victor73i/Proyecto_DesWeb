<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    use HasFactory;
    protected $table = 'alumno';
    protected $fillable = ['id','carnet_alumno','nombre_alumno','direccion','fecha_nacimiento','telefono','correo','id_sucursal'];
    public $timestamps = false;

    public function sucursal()
    {
        return $this->hasMany(Sucursal::class);
    }


}
