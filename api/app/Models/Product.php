<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    use HasFactory;

    const STATUS_ACTIVE = 1;
    const STATUS_INACTIVE = 0;

    const FEATURED_ACTIVE = 1;
    const FEATURED_INACTIVE = 0;
    
    protected $fillable = [
        'category_id',
        'name',
        'price',
        'image',
        'description',
        'featured',
        'status'
    ];

    public function category(){
        return $this->belongsTo('App\Models\Category','category_id');
    }
}
