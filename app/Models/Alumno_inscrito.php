<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno_inscrito extends Model
{
    use HasFactory;
    protected $table = 'alumno_inscrito';
    protected $fillable = ['id','id_alumno','id_curso','id_nivel','fecha','nota'];
    public $timestamps = false;
}
