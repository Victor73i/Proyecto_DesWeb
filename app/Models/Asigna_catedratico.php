<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asigna_catedratico extends Model
{
    use HasFactory;
    protected $table = 'asigna_catedratico';
    protected $fillable = ['id','id_catedratico','id_curso','id_nivel','fecha'];
    public $timestamps = false;}
