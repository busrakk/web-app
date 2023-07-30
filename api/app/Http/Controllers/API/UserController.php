<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Interfaces\Service\UserContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    private $userService;

    public function __construct(UserContact $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        return response()->json($this->userService->getAll());
    }

    public function find($id)
    {
        return response()->json($this->userService->findDataById($id));
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
            'role_as' => $request->role_as == 'admin' ? '1' : '0',
            'status' => $request->status == true ? '1':'0'
        ];

        return response()->json($this->userService->updateUser($data, $id));
    }

    public function destroy($id)
    {
        return response()->json($this->userService->deleteUser($id));
    }
}
