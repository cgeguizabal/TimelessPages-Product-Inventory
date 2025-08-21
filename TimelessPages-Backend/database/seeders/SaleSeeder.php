<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\Product;
use App\Models\Client;

class SaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get all products and clients
        $products = Product::all();
        $clients = Client::all();

        // Simulate 15 sales
        for ($i = 1; $i <= 15; $i++) {

            // Create a sale with random client and user
            $sale = Sale::create([
                'client_id' => $clients->random()->id, 
                'user_id' => rand(1, 3),              
                'date' => now()->subDays(rand(0, 365))->toDateString(), 
            ]);

            // Randomly select
            $selectedProducts = $products->random(rand(1, 4));

            foreach ($selectedProducts as $product) {

                $quantity = rand(1, 5); // random quantity

                // Prevent negative stock
                if ($product->stock < $quantity) {
                    $quantity = $product->stock;
                }

                if ($quantity <= 0) {
                    continue; // skip if no stock
                }

                // Decrease product stock
                $product->update([
                    'stock' => $product->stock - $quantity,
                ]);

                // Create SaleDetail
                SaleDetail::create([
                    'sale_id' => $sale->id,
                    'product_id' => $product->id,
                    'quantity' => $quantity,
                    'sale_price' => $product->unit_price * $quantity,
                ]);
            }
        }
    }
}