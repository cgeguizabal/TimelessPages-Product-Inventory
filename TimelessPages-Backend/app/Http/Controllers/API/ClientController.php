<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;


class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Find Client
        $clients = Client::all();

        //Error Handler
        if(!$clients){
            return response()->json(["status"=>"false",'message' => 'No clients found'], 404);
        }
        return response()->json($clients);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreClientRequest $request)
    {
       
        //Create client
        $client = Client::create($request->validated());

        //Send response
        return response()->json([
            'status' => "true",
            'message' => "Client added successfully",
            'data' => $client,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //Find client
        $client = Client::find($id);

        //Error Handler
        if(!$client){
            return response()->json(["status"=>"false",'message' => 'Client not found'], 404);
        }
        return response()->json($client);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        // //find client
        // $client = Client::find($id);

        // //Error Handler
        // if(!$client){
        //     return response()->json(["status"=>"false",'message' => 'Client not found'], 404);
        // }

        //Update client
        $client->update($request->validated());

        //Send response
        return response()->json([
            'status' => "true",
            'message' => "Client updated successfully",
            'data' => $client,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //Find Client
        $client = Client::find($id);

        //Error Handler
        if(!$client){
            return response()->json(["status"=>"false",'message' => 'Client not found'], 404);
        }

        //Delete Client
        $client->delete();

        //Send response
        return response()->json([
            'status' => "true",
            'message' => "Client deleted successfully",
        ], 200);
    }
}