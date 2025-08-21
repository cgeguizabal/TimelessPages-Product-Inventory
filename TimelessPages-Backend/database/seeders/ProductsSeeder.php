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
          $books = [
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
    [
        'name' => 'Pride and Prejudice',
        'description' => 'Romantic novel exploring manners and marriage.',
        'unit_price' => 11.75,
        'stock' => 18,
    ],
    [
        'name' => 'Moby-Dick',
        'description' => 'Epic tale of obsession with a white whale.',
        'unit_price' => 16.20,
        'stock' => 8,
    ],
    [
        'name' => 'War and Peace',
        'description' => 'Historical novel set during the Napoleonic Wars.',
        'unit_price' => 19.99,
        'stock' => 12,
    ],
    [
        'name' => 'The Catcher in the Rye',
        'description' => 'Story of teenage angst and alienation.',
        'unit_price' => 13.40,
        'stock' => 22,
    ],
    [
        'name' => 'Brave New World',
        'description' => 'Dystopian vision of a technologically advanced society.',
        'unit_price' => 12.80,
        'stock' => 17,
    ],
    [
        'name' => 'The Hobbit',
        'description' => 'Fantasy adventure about Bilbo Baggins.',
        'unit_price' => 14.50,
        'stock' => 25,
    ],
    [
        'name' => 'Crime and Punishment',
        'description' => 'Psychological novel about guilt and redemption.',
        'unit_price' => 17.30,
        'stock' => 9,
    ],
    [
        'name' => 'Jane Eyre',
        'description' => 'Romantic novel with gothic elements.',
        'unit_price' => 13.90,
        'stock' => 14,
    ],
    [
        'name' => 'The Odyssey',
        'description' => 'Ancient Greek epic about Odysseus’ journey home.',
        'unit_price' => 15.60,
        'stock' => 11,
    ],
    [
        'name' => 'The Lord of the Rings',
        'description' => 'Epic fantasy trilogy of Middle-earth.',
        'unit_price' => 21.00,
        'stock' => 7,
    ],
];


        foreach ($books as $products){
            Product::create($products);
        }

    }
}