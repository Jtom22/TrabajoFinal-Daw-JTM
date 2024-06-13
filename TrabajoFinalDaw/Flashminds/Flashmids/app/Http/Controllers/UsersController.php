<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    //
    public function index(){
        $user=Users::all();
        return response()->json($user);
    }
    public function store(Request $request){
        $user= new Users();
        $user->name=$request->name;
        $user->password=$request->password;
        $user->email=$request->email;
        $user->save();
        return $user;
        
    }

    public function show(Request $request){
      
        $user=Users::where('name',$request->name );
        $usuarios =Users::all();
        $usuario=$usuarios->where("name",$request->name)
        ->where("password",$request->password);
         $FinalUser=$usuario ;
     

        return response()->json($FinalUser);
    }
}
