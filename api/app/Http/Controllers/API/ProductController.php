<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Interfaces\Repository\ProductRepository;
use App\Interfaces\Service\ProductContact;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    private $productService;

    public function __construct(ProductContact $productService)
    {
        $this->productService = $productService;
    }

    public function index()
    {
        return response()->json($this->productService->getAll());
    }

    public function find(Request $request)
    {
        return response()->json($this->productService->findDataById($request->id));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category' => 'bail|required',
            'name' => 'bail|required|max:191',
            'price' => 'bail|required|max:20',
            //'image' => 'bail|required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->messages(),
                'status' => 'validation-error'
            ]);
        }

        $data = [
            'category_id' => $request->category,
            'name' => $request->name,
            'image' => $request->image,
            'description' => $request->description,
            'price' => $request->price,
            'featured' => $request->featured,
            'status' => $request->status
        ];

        // if($request->hasFile('image')){
        //     $file = $request->file('image');
        //     $filename = time() . '.' . $file->getClientOriginalExtension();
        //     $file->move('uploads/images/product/', $filename);
        //     $data['image'] = 'uploads/images/product/' . $filename;
        // }

        return response()->json($this->productService->saveProduct($data));

    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'category' => 'bail|required',
            'name' => 'bail|required|max:191',
            'price' => 'bail|required|max:20',
            // 'image' => 'bail|required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->messages(),
                'status' => 'validation-error'
            ]);
        }

        $data = [
            'category_id' => $request->category,
            'name' => $request->name,
            'image' => $request->image,
            'description' => $request->description,
            'price' => $request->price,
            'featured' => $request->featured,
            'status' => $request->status
        ];

        // if($request->hasFile('image')){
        //     $file = $request->file('image');
        //     $extension = $file->getClientOriginalExtension();
        //     $filename = time(). '.' . $extension; 
        //     $file->move('uploads/images/product/', $filename); 

        //     $data['image'] = 'uploads/images/product/'.$filename;
        // }
        
        return response()->json($this->productService->updateProduct($data, $id));

    }

    public function destroy($id)
    {
        try {
            $response = $this->productService->deleteProduct($id);
            if($response){
                return response()->json([
                    'success' => true,
                    'message' => 'Product Deleted Successfully',
                    'status' => 'success'
                ]);
            }
        }catch (\Throwable $th) {
            return response()->json([
                'message' => 'Something went wrong!',
                'status' => false
            ]);
        }
    }

    public function getFeaturedProduct()
    {
        return response()->json($this->productService->getProductByWhere([['featured', Product::FEATURED_ACTIVE]], ['id', 'name', 'price', 'image']));
    }

}
