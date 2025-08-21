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
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);



//PROTECTED WITH SANCTUM AND ROLE MIDDLEWARE
Route::middleware(['auth:sanctum', 'role:admin'])->group(function () {

    //User Management, protected
    Route::get('/users', [UserController::class, 'index']);   
    Route::get('/users/{user}', [UserController::class, 'show']);
    Route::put('/users/{user}', [UserController::class, 'update']);
    Route::delete('/users/{user}', [UserController::class, 'destroy']);

    //Suppliers management, protected with role permissions
    Route::apiResource('/suppliers', SupplierController::class); //Just admins can have access to Suppliers information

   //Purchases management, protected
   Route::post('/purchases', [PurchaseController::class, 'store']);
});




//PROTECTED WITH SANCTUM
Route::middleware('auth:sanctum')->group(function(){

    //Products management, protected 
    Route::apiResource('/products', ProductController::class); 

    //Client managment, protected
   Route::apiResource('/clients', ClientController::class);

   //Sales management, protected
   Route::apiResource('/sales', SaleController::class);

   //Stock report
   Route::get('/reports/stock', [ReportController::class, 'stockReport']);
   Route::post('/reports/sales', [ReportController::class, 'sales']);
   Route::post('/reports/purchases', [ReportController::class, 'purchasesBySupplier']);

});