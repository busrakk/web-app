<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Interfaces\Service\CategoryContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    private $categoryService;

    public function __construct(CategoryContact $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        return response()->json($this->categoryService->getAll());
    }

    public function find($id)
    {
        return response()->json($this->categoryService->findDataById($id));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'bail|required|max:191',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->messages(),
                'status' => 'validation-error'
            ]);
        }

        $data = [
            'name' => $request->name,
            'status' => $request->status == true ? '1':'0'
        ];
        return response()->json($this->categoryService->saveCategory($data));
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'bail|required|max:191',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->messages(),
                'status' => 'validation-error'
            ]);
        }

        $data = [
            'name' => $request->name,
            'status' => $request->status == true ? '1':'0'
        ];

        return response()->json($this->categoryService->updateCategory($data, $id));
    }

    public function destroy($id)
    {
        return response()->json($this->categoryService->deleteCategory($id));
    }

}