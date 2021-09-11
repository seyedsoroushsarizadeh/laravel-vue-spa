<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => ['required' , 'image' , 'mimes:jpg,png']
        ]);
    }


}
