<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AnimeController;
// use App\Http\Controllers\AuthController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserController::class, 'login']);
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::get('/animes', [AnimeController::class, 'index']);
Route::get('/animes/{id}', [AnimeController::class, 'show']);
Route::post('/animes', [AnimeController::class, 'store']);
Route::put('/animes/{id}', [AnimeController::class, 'update']);
Route::delete('/animes/{id}', [AnimeController::class, 'destroy']);


// Route::get('/animes', function () {
//     return App\Models\Anime::all();
// });
