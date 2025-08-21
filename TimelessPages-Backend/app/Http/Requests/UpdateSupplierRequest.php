<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException; 
use Illuminate\Contracts\Validation\Validator;

class UpdateSupplierRequest extends FormRequest
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
        $supplierId = $this->route('supplier')->id; // Get the supplier ID from the route
        return [
            'name'  => 'sometimes|string|max:255',
            'email' => 'sometimes|nullable|email|unique:suppliers,email,' . $supplierId,
            'phone' => 'sometimes|nullable|string|max:20',
        ];
    }

    //This function returns custom error messages for validation failures
    public function messages(): array
    {
        return [
            'name.string'    => 'Supplier name must be a string.',
            'name.max'       => 'Supplier name may not be greater than 255 characters.',
            'email.email'    => 'Please enter a valid email address.',
            'email.unique'   => 'This email address is already in use.',
            'phone.string'   => 'Phone must be a string.',
            'phone.max'      => 'Phone number may not be greater than 20 characters.',
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