<?php

namespace App\Interfaces\Service;
use Illuminate\Http\Request;

interface UserContact
{
    public function getAll();
    public function findDataById($id);
    public function updateUser($data, $id);
    public function deleteUser($id);
}