<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;


class StorePurchaseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'supplier_id' => 'required|exists:suppliers,id', 
            'user_id' => 'required|exists:users,id',       
            'products' => 'required|array|min:1',          
            'products.*.id' => 'required|exists:products,id', 
            'products.*.quantity' => 'required|integer|min:1', 
        ];
    }

    public function messages(): array
    {
       return [
            'supplier_id.required' => 'Supplier ID is required.',
            'supplier_id.exists' => 'The selected supplier does not exist.',
            'user_id.required' => 'User ID is required.',
            'user_id.exists' => 'The selected user does not exist.',
            'products.required' => 'Products are required.',
            'products.array' => 'Products must be an array.',
            'products.min' => 'At least one product is required.',
            'products.*.id.required' => 'Each product must have an ID.',
            'products.*.id.exists' => 'One or more products do not exist.',
            'products.*.quantity.required' => 'Each product must have a quantity.',
            'products.*.quantity.integer' => 'Product quantity must be an integer.',
            'products.*.quantity.min' => 'Product quantity must be at least 1.',
        ];
    }
 

    //Force to send JSON response
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => 'false',
            'message' => 'Validation failed',
            'errors' => $validator->errors()
        ], 422));
    }
}