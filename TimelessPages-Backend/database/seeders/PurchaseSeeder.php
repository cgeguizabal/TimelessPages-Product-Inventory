<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Purchase;
use App\Models\PurchaseDetail;
use App\Models\Product;

class PurchaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get all products 
        $products = Product::all();

        // Simulate 15 purchases
        for ($i = 1; $i <= 15; $i++) {

            // Create a purchase with a random supplier and user
            $purchase = Purchase::create([
                'supplier_id' => rand(1, 10), 
                'user_id' => rand(1, 3),     
                'date' => now()->subDays(rand(0, 365))->toDateString(), 
            ]);

            // Randomly select 
            $selectedProducts = $products->random(rand(1, 4));

            foreach ($selectedProducts as $product) {

                $quantity = rand(1, 10); // random quantity

                // Update product stock
                $product->update([
                    'stock' => $product->stock + $quantity,
                ]);

                // Create PurchaseDetail
                PurchaseDetail::create([
                    'purchase_id' => $purchase->id,
                    'product_id' => $product->id,
                    'quantity' => $quantity,
                    'purchase_price' => $product->unit_price * $quantity,
                ]);
            }
        }
    }
}