<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EspecialidadController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// routes/web.php

Route::resource('especialidades', EspecialidadController::class);

// Ruta adicional para ver médicos de una especialidad
Route::get('especialidades/{especialidad}/medicos', [EspecialidadController::class, 'medicos'])
    ->name('especialidades.medicos');   
