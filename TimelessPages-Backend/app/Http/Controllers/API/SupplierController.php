<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Supplier;
use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use Illuminate\Support\Facades\Gate;


class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        //Authorize the user
        Gate::authorize('viewAny', Supplier::class);
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
    public function store(StoreSupplierRequest $request)
    {

        Gate::authorize('create', Supplier::class);

        //Create supplier
        $supplier = Supplier::create($request->validated());

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
    public function show(Supplier $supplier)
    {
        //Authorize the user
        Gate::authorize('view', $supplier);
        return response()->json([
            "status" => "true",
            "message" => "Supplier retrieved successfully",
            "data" => $supplier
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier)
    {

        //Authorize the user
        Gate::authorize('update', $supplier);
        try{
            //Update supplier information
            $supplier->update($request->validated());

            //Send response
        return response()->json([
            "status" => "true",
            "message" => "Supplier updated successfully",
            "data" => $supplier
        ], 200);
        
        } catch (\Exception $error) {
            return response()->json([
                "status" => "false",
                "message" => "Error updating supplier: " . $error->getMessage()
            ], 500);
        }

        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Supplier $supplier)
    {
        //Authorize the user
        
       Gate::authorize('delete', $supplier);

       try{
        //Delete supplier
        $supplier->delete();

        //Send response
        return response()->json([
            "status" => "true",
            "message" => "Supplier deleted successfully"
        ], 200);
    }catch(\Exception $error){
        return response()->json([
            "status" => "false",
            "message" => "Error deleting supplier: " . $error->getMessage()
        ], 500);
    }
 }
}