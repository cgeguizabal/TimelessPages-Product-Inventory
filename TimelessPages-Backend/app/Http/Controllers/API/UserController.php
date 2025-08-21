<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource; 
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Gate; 



class UserController extends Controller
{

    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        Gate::authorize('viewAny', User::class);
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
    public function show(User $user)
    {
                Gate::authorize('view', $user);

        //Send Response
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
    Gate::authorize('update', $user);
    try {
        $data = $request->validated();

        // Hash password if present
        if (isset($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }

        // Update user
        $user->update($data);

        //Send response
        return response()->json([
            'status' => true,
            'data' => new UserResource($user)
        ]);
    } catch (\Exception $error) {
        //Send error
        return response()->json([
            'status' => false,
            'message' => 'Failed to update user',
            'error' => $error->getMessage()
        ], 500);
    }
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user){
        Gate::authorize('delete', $user);
    try {
        $user->delete();

        return response()->json([
            'status' => true,
            'message' => 'User deleted successfully'
        ]);
    } catch (\Exception $error) {
        return response()->json([
            'status' => false,
            'message' => 'Failed to delete user',
            'error' => $error->getMessage()
        ], 500);
    }
 }
}