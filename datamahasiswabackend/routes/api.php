<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get("/hello-world", function() {
//     return response()->json([
//         'statusCode' => 200,
//         'message' => 'Hello World!'
//     ], 200);
// });

Route::prefix('mahasiswa')->group(function() {
    Route::get('/getMahasiswa', 'App\Http\Controllers\MahasiswaController@index');
    Route::post('/addMahasiswa', 'App\Http\Controllers\MahasiswaController@store');
    Route::get('/detailMahasiswa/{mahasiswa}', 'App\Http\Controllers\MahasiswaController@show');
    Route::put('/updateMahasiswa/{mahasiswa}', 'App\Http\Controllers\MahasiswaController@update');
    Route::delete('/deleteMahasiswa/{mahasiswa}', 'App\Http\Controllers\MahasiswaController@destroy');
});