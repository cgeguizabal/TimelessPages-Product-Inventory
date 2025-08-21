<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product; 
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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
    public function show(string $id)
    {
        $product = Product::find($id);

        //Error Handler
        if(!$product){
            return response()->json([
                "status" => "false",
                "message" => "Book not found"
            ], 404);
        }


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
        //Update product
        $product->update($request->validated());

        //Send response
        return response()->json([
            "status" => "true",
            "message" => "Book updated successfully",
            "data" => $product
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::find($id);

        if(!$product){
            return response()->json([
                "status" => "false",
                "message" => "Book not found"
            ], 404);
        }

        $product->delete();

        //Send response
        return response()->json([
            "status" => "true",
            "message" => "Book deleted successfully"
        ], 200);
    }
}