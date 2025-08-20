<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',        
        'email',
        'phone',        
    ]; 

    // One supplier has many purchases
    public function purchases() {
    return $this->hasMany(Purchase::class); 
    }

}