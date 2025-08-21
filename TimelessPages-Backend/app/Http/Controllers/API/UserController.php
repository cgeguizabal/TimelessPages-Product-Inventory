<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource; // Defines what is returned
use App\Http\Requests\UpdateUserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Find all users
        $users = User::all();
        
       //Handle error
        if ($users->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No users found'
            ], 404);
        }

        //Send Response
        return response()->json([
            'status' => true,
            'data' => UserResource::collection($users)
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id);

        if(!$user) {
            return response()->json([
                'status' => false,
                'message' => 'User not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => new UserResource($user)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //Validate Request
        $data = $request->validated();

      // If password is present, hash it
        if (isset($data['password'])) {
        $data['password'] = Hash::make($data['password']);
    }

       //Update User
        $user->update($data);

        //Send Response
        return response()->json([
            'status' => true,
            'data' => new UserResource($user)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'User not found'
            ], 404);
        }

        $user->delete();

        return response()->json([
            'status' => true,
            'message' => 'User deleted successfully'
        ]);
    }
}