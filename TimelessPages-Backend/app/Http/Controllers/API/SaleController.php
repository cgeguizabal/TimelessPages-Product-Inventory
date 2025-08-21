<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Validate and create the sale
  //This makes sure that every database operation is executed successfully
            $sale = DB::transaction(function() use ($request){

                //Create Sale
                $sale = Sale::create([
                    'client_id' => $request['client_id'],
                    'user_id' => $request['user_id'],
                    'date' => now()->toDateString(),
                ]);

                //Create Sale Details
                foreach($request['products'] as $items){

                    //Get product price from DB
                    $product = Product::find($items['id']);

                    //Check if product exist
                    if(!$product){
                        throw new \Exception("Product with ID {$items['id']} not found");
                    }

                    //Calculate sale-price
                    $totalPrice = $product->unit_price * $items['quantity'];

                    //Decrease product stock
                    $product->update(['stock' => $product->stock - $items['quantity']]);

                    //Create Sale Detail
                    SaleDetail::create([
                        'sale_id' => $sale->id,
                        'product_id' => $product->id,
                        'quantity' => $items['quantity'],
                        'sale_price' => $totalPrice
                    ]);
                }
                return $sale;
            });

            return response()->json([
                'status' => "true",
                'message' => 'Sale created successfully',
                'data' => $sale
            ], 200);
        } catch (\Exception $error) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to create sale',
                'error' => $error->getMessage()
            ], 500);
        }
    }

    
   
}