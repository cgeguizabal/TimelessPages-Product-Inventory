<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\SupplierController;
use App\Http\Controllers\API\ClientController;
use App\Http\Controllers\API\PurchaseController;
use App\Http\Controllers\API\SaleController;
use App\Http\Controllers\API\ReportController;


//Authentication(Register, Login and Logout)
Route::post('/v1/register', [AuthController::class, 'register']);
Route::post('/v1/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/v1/logout', [AuthController::class, 'logout']);



//PROTECTED WITH SANCTUM AND ROLE MIDDLEWARE
Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {

    //User Management, protected
    Route::get('/v1/users', [UserController::class, 'index']);   
    Route::get('/v1/users/{user}', [UserController::class, 'show']);
    Route::put('/v1/users/{user}', [UserController::class, 'update']);
    Route::delete('/users/{user}', [UserController::class, 'destroy']);

    //Suppliers management, protected with role permissions
    Route::apiResource('/v1/suppliers', SupplierController::class); //Just admins can have access to Suppliers information

   //Purchases management, protected
   Route::post('/v1/purchases', [PurchaseController::class, 'store']);
});




//PROTECTED WITH SANCTUM
Route::middleware('auth:sanctum')->group(function(){

    //Products management, protected 
    Route::apiResource('/v1/products', ProductController::class); 

    //Client managment, protected
   Route::apiResource('/v1/clients', ClientController::class);

   //Sales management, protected
   Route::post('/v1/sales', [SaleController::class, 'store']);
   Route::get('/v1/sales', [SaleController::class, 'index']);

   //Stock report
   Route::get('/v1/reports/stock', [ReportController::class, 'stockReport']);
   Route::post('/v1/reports/sales', [ReportController::class, 'sales']);
   Route::post('/v1/reports/purchases', [ReportController::class, 'purchasesBySupplier']);

});