<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Supplier;
use Illuminate\Support\Facades\DB;

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
    [
        'name' => 'Modern Reads Co.',
        'email' => 'sales@modernreads.com',
        'phone' => '555-3000',
    ],
    [
        'name' => 'Literary Distributors',
        'email' => 'support@literarydist.com',
        'phone' => '555-4000',
    ],
    [
        'name' => 'Academic Texts Ltd.',
        'email' => 'contact@academictexts.com',
        'phone' => '555-5000',
    ],
    [
        'name' => 'Children’s Book World',
        'email' => 'hello@childrensworld.com',
        'phone' => '555-6000',
    ],
    [
        'name' => 'SciFi & Fantasy Depot',
        'email' => 'info@scifidepot.com',
        'phone' => '555-7000',
    ],
    [
        'name' => 'Historical Works Supply',
        'email' => 'sales@historicalsupply.com',
        'phone' => '555-8000',
    ],
    [
        'name' => 'Poetry House Distributors',
        'email' => 'contact@poetryhouse.com',
        'phone' => '555-9000',
    ],
    [
        'name' => 'Global Knowledge Press',
        'email' => 'info@gkpress.com',
        'phone' => '555-1010',
    ],
];


        foreach ($suppliers as $supplier){
            Supplier::create($supplier);
        }
    }
}