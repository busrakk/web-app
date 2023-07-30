<?php

namespace App\Repositories;
use App\Interfaces\Repository\UserRepository;
use App\Models\User;

class UserRepositoryEloquent implements UserRepository{

    public function update($id, $data)
    {
        return User::where('id', $id)->update($data);
    }

    public function getAll()
    {
        return User::all();
    }

    public function getById($id)
    {
        return User::where('id', $id)->first();
    }

    public function delete($id)
    {
        return User::where('id', $id)->delete();
    }

}
