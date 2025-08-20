<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Testing data
          $books= [
            [
                'name' => 'The Great Gatsby',
                'description' => 'Classic novel about the Jazz Age.',
                'unit_price' => 15.99,
                'stock' => 20,
            ],
            [
                'name' => '1984',
                'description' => 'Dystopian novel about totalitarianism.',
                'unit_price' => 12.50,
                'stock' => 15,
            ],
            [
                'name' => 'To Kill a Mockingbird',
                'description' => 'Novel about racial injustice.',
                'unit_price' => 14.00,
                'stock' => 10,
            ],
        ];

        foreach ($books as $products){
            Product::create($products);
        }

    }
}