<?php

namespace App\Http\Controllers;

use App\Models\Collections;
use Illuminate\Http\Request;

class CollectionsController extends Controller
{
    //
    public function index(){
        $collection=Collections::all();
        return response($collection);
    }

    public function store(Request $request){
        $collection= new Collections();
        $collection->name=$request->name;
        $collection->usuario_id=$request->usuario_id;
        $collection->save();
        return $collection;
        
    }
    public function show($id){
        $collection=Collections::find($id);
        return response()->json($collection);
    }
    public function update(Request $request){
        $collection=Collections::findOrFail($request->id);
        $collection->name=$request->name;
        $collection->save();
        return $collection;
        
    }

    
    public function destroy($id){
        $collection =Collections::destroy($id);
        return response()->json($collection);
    }

}
