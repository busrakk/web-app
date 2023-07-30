<?php

namespace App\Interfaces\Repository;
use Illuminate\Http\Request;

interface UserRepository
{
    public function getAll();
    public function getById($id);
    public function update($id, $data);
    public function delete($id);
}