<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Sale;
use App\Models\Purchase;
use App\Models\Supplier;
use App\Models\PurchaseDetail;
use App\Models\SaleDetail;

class ReportController extends Controller
{
    //Report of current stock
    public function stockReport(){

        $products = Product::all(['name', 'stock']);

        return response()->json([
            'status' => "true",
            'message' => "Stock report retrieved successfully",
            'data' => $products
        ], 200);
    }

    //Report of sale by date rage
    public function sales(Request $request)
    {
        $request->validate([
            'from' => 'required|date',
            'to' => 'required|date|after_or_equal:from'
        ]);

        $sales = Sale::with('saleDetails')
        ->whereBetween('date', [$request->from, $request->to])
        ->get();

        if ($sales->isEmpty()) {
        return response()->json([
            'status' => false,
            'message' => 'No sales found in the given date range'
        ], 404);
    }

        return response()->json([
            'status' => true,
            'data' => $sales
        ]);
    } 

    //Report of Purchases by supplier
      public function purchasesBySupplier(Request $request)
    {
        $request->validate([
            'name' => 'required|string|exists:suppliers,name'
        ]);

        $supplier = Supplier::where('name', $request->name)->first();

        $purchases = Purchase::with('purchaseDetails')
        ->where('supplier_id', $supplier->id)
        ->get();
        
        if ($purchases->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No purchases found for this supplier'
            ], 404);
        }
        
        return response()->json([
            'status' => true,
            'data' => $purchases
        ]);
    }
}