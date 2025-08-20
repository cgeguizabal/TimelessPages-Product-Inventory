<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Product;
use App\Models\Sale;

class SaleDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'sale_id',
        'product_id',
        'quantity',
        'sale_price'
    ];

    //One SaleDetail belongs to one sale
    public function sale(){
        return $this->belongsTo(Sale::class);
    }

    //One SaleDetail belongs to one product
    public function product(){
        return $this->belongsTo(Product::class);
    }

}