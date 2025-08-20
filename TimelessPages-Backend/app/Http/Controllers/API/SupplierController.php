<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Supplier;
use Illuminate\Support\Facades\Validator;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $suppliers = Supplier::all();

        //Error Handler
        if(!$suppliers){
            return response()->json(["status"=>"false",'message' => 'No suppliers found'], 404);
        }
        return response()->json($suppliers);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //Validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'nullable|string',
            'phone' => 'nullable|string',
        ]);
       //Error Handler
        if($validator->fails()){
            return response()->json([
                'status' => "false",
                "message" => "All fields are required",
                "errors" => $validator->errors()
            ], 422);
        };

        //Create supplier
        $supplier = Supplier::create($request->all());

        //Send response
        return response()->json([
            'status' => "true",
            'message' => "Supplier added successfully",
            'data' => $supplier,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $supplier = Supplier::find($id);

        //Error Handler
        if(!$supplier){
            return response()->json(["status"=>"false",'message' => 'Supplier not found'], 404);
        }
        return response()->json([
            "status" => "true",
            "message" => "Supplier retrieved successfully",
            "data" => $supplier
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

       //Find supplier
        $supplier = Supplier::find($id);
        
        //Error Handler
        if(!$supplier){
            return response()->json(["status"=>"false",'message' => 'Supplier not found'], 404);
        }

    

       //Update supplier information
        $supplier->update($request->all());


        //Send response
        return response()->json([
            "status" => "true",
            "message" => "Supplier updated successfully",
            "data" => $supplier
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //Find supplier
        $supplier = Supplier::find($id);

        //error Handler
        if(!$supplier){
            return response()->json(["status"=>"false",'message' => 'Supplier not found'], 404);
        }

        //Delete supplier
        $supplier->delete();

        //Send response
        return response()->json([
            "status" => "true",
            "message" => "Supplier deleted successfully"
        ], 200);
    }
}