<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash; 
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource; // Defines what is returned


class AuthController extends Controller
{
    //Register a new user
    public function register(Request $request){

    // Validate the input from request       
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed', // add password_confirmation on request
            'role' => 'in:admin,seller', //Can be either admin or seller, nothing else
        ]);
    
    //Handle errors
        if($validator->fails()){
            $errorMessage = $validator->errors()->first();
            $response = [
                "status" => false,
                "message" => $errorMessage,
            ];
            return response()->json($response, 422);
        }

     //Create User and hash password
        $user = User::create([
        'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role ?? 'seller', //Default role is seller
    ]);

    //Create token 
        $token = $user->createToken('auth_token')->plainTextToken;

    //Response
    return response()->json([
        "message" => "User registered successfully",
        'user' => new UserResource($user),
            'token' => $token,
            'token_type' => 'Bearer' 
    ],201);
}

public function login(Request $request){

    //Validate input request
    $validator = Validator::make($request->all(), [
        'email' => "required|string|email",
        "password" => "required",
    ]);
    
    //Handle errors
    if($validator->fails()){
        $errorMessage = $validator->errors()->first();
        $response = [
            'status' => false,
            'message'=> $errorMessage,
        ];
        return response()->json($response, 422);
    }

    //Find user by email
    $user = User::where('email', $request->email)->first();

    //Check password
    if(!$user || !Hash::check($request->password, $user->password)){
    return response()->json([
        'status' => false,
        "message" => 'The provided credentials are incorrect'
    ], 401);
}

    //Delete old tokens
    $user->tokens()->delete();

    //Create new token
    $token = $user->createToken('auth_token')->plainTextToken;

    //Send response(token)
    return response()->json([
        'status' => true,
        'message' => 'Login successful',
        'user' => new UserResource($user),
        'token' => $token,
        'token_type' => 'Bearer'
    ]);    
}

//Logout and delete current token
public function logout(Request $request){
    //Get current user
    $user = $request->user();

    //Delete current token
    $user->currentAccessToken()->delete();

    //Response
    return response()->json([
        'status' => true,
        'message' => 'Logged out successfully'
    ]);
}

}