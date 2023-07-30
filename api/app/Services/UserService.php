<?php

namespace App\Services;

use App\Interfaces\Repository\UserRepository;
use App\Interfaces\Service\UserContact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserService implements UserContact{

    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getAll()
    {
        $response = $this->userRepository->getAll();

        if($response){
            return [
                'data' => $response,
                'success' => true,
                'status' => 'success'
            ];
        }
    }

    public function findDataById($id)
    {
        $response = $this->userRepository->getById($id);

        if($response){
            return [
                'data' => $response,
                'success' => true,
                'status' => 'success'
            ];
        }else{
            return [
                'message' => 'User Not Found!',
                'success' => false,
                'status' => 'error'
            ];
        }
    }

    public function updateUser($data, $id)
    {
        try {
            $response = $this->userRepository->update($id, $data);

            if($response){
                return [
                    'success' => true,
                    'message' => 'User Update Successfully',
                    'status' => 'success'
                ];
            }
        }catch (\Throwable $th) {
            return [
                'message' => 'Something went wrong!',
                'status' => false
            ];
        }
    }

    public function deleteUser($id)
    {
        try {
            $response = $this->userRepository->delete($id);

            if($response){
                return [
                    'success' => true,
                    'message' => 'User Deleted Successfully',
                    'status' => 'success'
                ];
            }
        }catch (\Throwable $th) {
            return [
                'message' => 'Something went wrong!',
                'status' => false
            ];
        }
    }
    
}
