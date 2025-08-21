<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Purchase;
use App\Models\PurchaseDetail;
use App\Http\Requests\StorePurchaseRequest;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    
    /**
     * Store a newly created resource in storage.
     */
 public function store(StorePurchaseRequest $request)
{
    try {

        $data = $request->validated();
        //This makes sure that every database operation is executed successfully
        $purchase = DB::transaction(function() use ($data) {

            // Create purchase
            $purchase = Purchase::create([
                'supplier_id' => $data['supplier_id'],
                'date' => now()->toDateString(),
                'user_id' => $data['user_id'],
            ]);

            // Create Purchase Details
            foreach ($data['products'] as $item) {

                // Get product price from DB
                $product = Product::find($item['id']);

                // Check if product exists
                if (!$product) {
                    throw new \Exception("Product with ID {$item['id']} not found");
                }

                // Calculate purchase_price
                $totalPrice = $product->unit_price * $item['quantity'];

                // Increase STOCK
                $product->update(['stock' => $product->stock + $item['quantity']]);

                // Create Purchase Detail
                PurchaseDetail::create([
                    'purchase_id' => $purchase->id,
                    'product_id' => $item['id'],
                    'quantity' => $item['quantity'],
                    'purchase_price' => $totalPrice,
                ]);
            }

            return $purchase;
        });

        return response()->json([
            'status' => "true",
            'message' => "Purchase created successfully",
            'data' => $purchase,
        ], 201);

    } catch (\Exception $error) {
        return response()->json([
            'status' => 'false',
            'message' => $error->getMessage()
        ], 400);
    }
}

}