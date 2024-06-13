<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Medico;

class Especialidad extends Model
{
    use HasFactory;

    //Para el store  y update de la tabla
    protected $fillable = ['codigo', 'descripcion'];

    public function medicos(){
        return $this->hasMany(Medico::class);
    }

    

}
