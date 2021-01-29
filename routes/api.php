<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StikerController;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::prefix("auth")->group(function () {
    Route::get("/init", "App\\Http\\Controllers\\AuthController@init");
    Route::post("/login", "App\\Http\\Controllers\\AuthController@login");
    Route::post("/register", "App\\Http\\Controllers\\AuthController@register");
});

Route::apiResource('stikers', StikerController::class);
