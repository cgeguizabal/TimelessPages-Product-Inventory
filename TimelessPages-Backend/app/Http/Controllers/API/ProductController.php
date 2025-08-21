<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product; 
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Support\Facades\Gate;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Authorize the user
        Gate::authorize('viewAny', Product::class);

        $products = Product::all();

        //Error Handler
        if(!$products){
            return response()->json(["status"=>"false",'message' => 'No products found'], 404);
        }
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //Authorize the user
        Gate::authorize('create', Product::class);

       //Create product
        $product = Product::create($request->validated());

        //Send response
        return response()->json([
            'status' => "true",
            'message' => "Book added successfully",
            'data' => $product,
        ], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //Authorize the user
        Gate::authorize('view', $product);

       //Send response
        return response()->json([
            "status" => "true",
            "message" => "Book found",
            "data" => $product
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {

        //Authorize the user
        Gate::authorize('update', $product);
        try {
            //Update product
            $product->update($request->validated());

        //Send response
        return response()->json([
            "status" => "true",
            "message" => "Book updated successfully",
            "data" => $product
        ], 200);
    } catch (\Exception $error) {
        return response()->json([
            "status" => "false",
            "message" => "Error updating product: " . $error->getMessage()
        ], 500);
    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {

        //Authorize the user
        Gate::authorize('delete', $product);

      try {
          $product->delete();
          
          //Send response
        return response()->json([
            "status" => "true",
            "message" => "Book deleted successfully"
        ], 200);

      } catch (\Exception $error) {
          return response()->json([
              "status" => "false",
              "message" => "Error deleting product: " . $error->getMessage()
          ], 500);
      }

        
    }
}