<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Product;
use App\Models\Purchase;

class PurchaseDetail extends Model
{

    use HasFactory;
    
    protected $fillable =[
        'purchase_id',
        'product_id',
        'quantity',
        'purchase_price'
    ];

    // One purchase detail belongs to one product
        public function product() {
        return $this->belongsTo(Product::class); 
        }

    //One purchase detail belongs to one purchase
    public function purchase(){
        return $this->belongsTo(Purchase::class);
    }
}