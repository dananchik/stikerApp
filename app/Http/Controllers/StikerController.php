<?php

namespace App\Http\Controllers;

use App\Models\Stiker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class StikerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Stiker::all();
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
                "file" => "required|image|mimes:jpeg,png,jpg,gif,svg|max:2048"
            ]
        );
        if ($validator->fails()) {
            return response()->json([
                "status" => false,
                "message" => "failed data"
            ]);
        } else {
            $fullName = $request->file('file')->getClientOriginalName();
            $type = $request->file('file')->getClientOriginalExtension();
            $hash = md5($fullName).'.'.$type;
            $imageName = $hash;
            $request->file('file')->storeAs('images', $imageName);
            $request->file('file')->move(public_path('images'), $imageName);
            $stiker = Stiker::create([
                "title" => $request->title,
                "description" => $request->description
            ]);
            return response()->json([
                "status" => true,
                "message" => "new sriker created",
                "stiker" => $stiker,
                "file" => $hash
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
            $stiker = Stiker::findOrFail($id);
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
            $stiker = Stiker::findOrFail($id)->destroy();
        }
        catch(ModelNotFoundException $e) {
            return response()->json([
                "status" => false,
                "message" => "stiker was not destroy",
            ]);
        }
        return response()->json([
                "status" => true,
                "message" => "stiker was destroyed",
                "stiker" => $stiker
            ]);
    }

}
