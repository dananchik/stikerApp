<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function init() {
        $user = Auth::user();
        return ["user" => $user, "status" => true];
    }

    public function login(Request $request){
        if (Auth::attempt(["username" => $request->username, "password" => $request->password])) {
            $user = Auth::user();
            return ["user" => $user, "status" => true];
        } else {
            return response()->json(["error" => "Could not log you in", "status" => false], 403);
        }
    }

    public function register(Request $request) {
        $user = new User();
        $user->name = $request->name;
        $user->username = $request->username;
        $user->password = bcrypt($request->password);
        $user->save();

        Auth::login($user);

        return ["user" => $user, "status" => true];
    }
}
