<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CollectionsController;
use App\Http\Controllers\FlashcardsController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });



//Users
Route::get('/users', [UsersController::class, 'index']);
Route::post('/user', [UsersController::class, 'store']);
Route::post('/userExiste', [UsersController::class, 'show']);

//Collections
Route::get('/collections', [CollectionsController::class, 'index']);
Route::post('/collections', [CollectionsController::class, 'store']);
Route::get('/collections/{id}', [CollectionsController::class, 'show']);
Route::put('/collections/{id}', [CollectionsController::class, 'update']);
Route::delete('/collections/{id}', [CollectionsController::class, 'destroy']);

//Flashcards
Route::get('/flashcards', [FlashcardsController::class, 'index']);
Route::post('/flashcards', [FlashcardsController::class, 'store']);
Route::get('/flashcards/{id}', [FlashcardsController::class, 'show']);
Route::get('/flashcardsConcretos/{id}', [FlashcardsController::class, 'Coleccion']);
Route::put('/flashcards/{id}', [FlashcardsController::class, 'update']);
Route::delete('/flashcards/{id}', [FlashcardsController::class, 'destroy']);
// Para Empezar servidor php artisan serve