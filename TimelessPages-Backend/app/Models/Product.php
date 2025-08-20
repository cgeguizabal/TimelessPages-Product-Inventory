<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\PurchaseDetail;
use App\Models\SaleDetail;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'unit_price',
        'stock',
    ];
   
    // One product has many purchase details
    public function purchaseDetails(){
        return $this->hasMany(PurchaseDetail::class); 
    }

    // One product has many sale details
    public function saleDetails(){
        return $this->hasMany(SaleDetail::class);
    }

}