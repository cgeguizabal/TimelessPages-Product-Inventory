<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Supplier;

class SuppliersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $suppliers = [
            [
                'name' => 'Global Books Supply',
                'email' => 'contact@globalbooks.com',
                'phone' => '555-1000',
            ],
            [
                'name' => 'Classic Novels Inc.',
                'email' => 'info@classicnovels.com',
                'phone' => '555-2000',
            ],
        ];

        foreach ($suppliers as $supplier){
            Supplier::create($supplier);
        }
    }
}