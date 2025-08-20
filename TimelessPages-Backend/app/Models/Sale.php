<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Client;
use App\Models\User;
use App\Models\SaleDetail;

class Sale extends Model
{

    use HasFactory;

    protected $fillable = [
         'client_id',
         'user_id',
         'date'
    ];

    //One sale belongs to one client
    public function client() {
      return $this->belongsTo(Client::class); 
   }
    
   //One sale belongs to one User
   public function user(){
      return $this->belongsTo(User::class);
   }

   //One sale many SaleDetails
   public function saleDetails(){
    return $this->hasMany(SaleDetail::class);
   }
   
}