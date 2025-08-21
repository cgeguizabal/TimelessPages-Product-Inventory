<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Client;


class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         $clients = [
            [
                'name' => 'Alice Johnson',
                'email' => 'alice.johnson@example.com',
                'phone' => '555-1100',
            ],
            [
                'name' => 'Bob Smith',
                'email' => 'bob.smith@example.com',
                'phone' => '555-1200',
            ],
            [
                'name' => 'Carol Williams',
                'email' => 'carol.williams@example.com',
                'phone' => '555-1300',
            ],
            [
                'name' => 'David Brown',
                'email' => 'david.brown@example.com',
                'phone' => '555-1400',
            ],
            [
                'name' => 'Eva Davis',
                'email' => 'eva.davis@example.com',
                'phone' => '555-1500',
            ],
            [
                'name' => 'Frank Miller',
                'email' => 'frank.miller@example.com',
                'phone' => '555-1600',
            ],
            [
                'name' => 'Grace Lee',
                'email' => 'grace.lee@example.com',
                'phone' => '555-1700',
            ],
            [
                'name' => 'Henry Wilson',
                'email' => 'henry.wilson@example.com',
                'phone' => '555-1800',
            ],
            [
                'name' => 'Ivy Martinez',
                'email' => 'ivy.martinez@example.com',
                'phone' => '555-1900',
            ],
            [
                'name' => 'Jack Taylor',
                'email' => 'jack.taylor@example.com',
                'phone' => '555-2000',
            ],
        ];

        foreach ($clients as $client) {
            Client::create($client);
        }
    }
}