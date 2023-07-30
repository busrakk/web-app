<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// public
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

//protected
Route::middleware(['auth:sanctum', 'isAPIAdmin'])->group( function(){
    Route::get('checkAuthenticated', function(){
        return response()->json(['message' => 'You are in', 'status'=>200], 200);
    });
    Route::group(['prefix' => 'admin', 'namespace' => 'App\Http\Controllers\API'], function(){
        //Category route
        Route::post('category-list', 'CategoryController@index');
        Route::post('category-store', 'CategoryController@store');
        Route::post('category-update/{id}', 'CategoryController@update');
        Route::post('category-delete/{id}', 'CategoryController@destroy');
        Route::post('category/{id}', 'CategoryController@find');
        Route::post('category-dropdown-list', 'CategoryController@getCategoryForDropdown');
        // Product route
        Route::post('product-save', 'ProductController@store');
        Route::post('product-update/{id}', 'ProductController@update');
        Route::post('product-list', 'ProductController@index');
        Route::post('product-details', 'ProductController@find');
        Route::post('product-delete/{id}', 'ProductController@destroy');
        //User route
        Route::post('user-list', 'UserController@index');
        Route::post('user-update/{id}', 'UserController@update');
        Route::post('user-delete/{id}', 'UserController@destroy');
        Route::post('user/{id}', 'UserController@find');
    });
});

Route::middleware(['auth:sanctum'])->group( function(){
    Route::post('logout', [AuthController::class, 'logout']);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
