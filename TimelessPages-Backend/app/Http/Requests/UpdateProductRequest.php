<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UpdateProductRequest extends FormRequest
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
            'name' => 'sometimes|string|max:255',
            'description' => 'sometimes|nullable|string',
            'unit_price' => 'sometimes|numeric|min:0',
            'stock' => 'sometimes|integer|min:0',
        ];
    }

    //This function returns custom error messages for validation failures
    public function messages(): array
    {
        return [
            'description.string' => 'The description must be a string.',
            'unit_price.numeric' => 'The unit price must be a number.',
            'unit_price.min' => 'The unit price must be at least 0.',
            'stock.integer' => 'The stock must be a number.',
            'stock.min' => 'The stock must be at least 0.',
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