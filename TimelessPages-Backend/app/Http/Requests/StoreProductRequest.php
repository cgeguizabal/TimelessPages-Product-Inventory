<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException; 
use Illuminate\Contracts\Validation\Validator;


class StoreProductRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'description' => 'required|nullable|string',
            'unit_price' => 'required|numeric|integer|min:0',
            'stock' => 'required|integer|min:0',
        ];
    }

    //This function returns custom error messages for validation failures
    public function messages(): array
    {
        return [
            'name.required' => 'Please enter the book\'s name.',
            'description.required' => 'Please enter the book\'s description',
            'unit_price.required' => 'Please enter the book\'s price.',
            'unit_price.integer' => 'The price must be an number.',
            'unit_price.numeric' => 'The price must be a number.',
            'stock.required' => "Please enter the book's stock.",
            'stock.integer' => "The stock must be an number.",
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