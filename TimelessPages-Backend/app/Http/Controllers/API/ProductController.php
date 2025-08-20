<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product; 
use Illuminate\Support\Facades\Validator;

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
    public function store(Request $request)
    {

        //Validation 
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'unit_price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);

        //Validation Error Handler
        if($validator->fails()){
            return response()->json([
                'status' => "false",
                "message" => "All fields are required",
                "errors" => $validator->errors()
            ], 422);
        };

       //Create product
        $product = Product::create($request->all());
        
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
    public function update(Request $request, string $id)
    {
        $product = Product::find($id);

        if(!$product){
            return response()->json([
                "status" => "false",
                "message" => "Book not found"
            ], 404);
        }

        $product->update($request->all());

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