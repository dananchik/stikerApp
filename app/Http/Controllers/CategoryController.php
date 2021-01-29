<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CategoryController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                "title" => ["required"],
                "description" => ["required"],
            ]
        );
        if ($validator->fails()) {
            return response()->json([
                "status" => false,
                "message" => "failed data"
            ]);
        } else {
            $category = Category::create([
                "title" => $request->title,
                "description" => $request->description
            ]);
            return response()->json([
                "status" => true,
                "message" => "new sriker created",
                "stiker" => $category
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $stiker = Category::findOrFail($id);
        }
        catch(ModelNotFoundException $e){
            $message = "not found";
            return response()->json([
                "status" => false,
                "message" => $message,
            ]);
        }
        return response()->json([
            "status" => true,
            "stiker" => $stiker,
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $category = Category::findOrFail($id)->destroy();
        }
        catch(ModelNotFoundException $e) {
            return response()->json([
                "status" => false,
                "message" => "category was not destroy",
            ]);
        }
        return response()->json([
                "status" => true,
                "message" => "category was destroyed",
                "stiker" => $category
            ]);
    }
}
