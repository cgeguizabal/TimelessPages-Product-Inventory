<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Supplier;
use App\Models\PurchaseDetail;
use App\Models\User;

class Purchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'supplier_id',
        'date',        
        'user_id',
    ];

   // One purchase belongs to one supplier
    public function supplier() {
    return $this->belongsTo(Supplier::class); 
    }

  // One purchase has many details
    public function purchaseDetails() {
    return $this->hasMany(PurchaseDetail::class); 
    }

  // One purchase belongs to one user
    public function user() {
    return $this->belongsTo(User::class);
    }


}