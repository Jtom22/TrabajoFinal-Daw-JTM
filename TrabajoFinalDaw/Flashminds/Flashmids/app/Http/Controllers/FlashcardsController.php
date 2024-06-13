<?php

namespace App\Http\Controllers;

use App\Models\Flashcards;
use Illuminate\Http\Request;

class FlashcardsController extends Controller
{
    //
    public function index(){
        $flashcard=Flashcards::all();
        return response()->json($flashcard);
    }

    public function Coleccion($id){
        
        $flashcard=Flashcards::where('id_coleccion',$id );
        return response()->json($flashcard);
    }
    
    public function store(Request $request){
        $flashcard= new Flashcards();
        $flashcard->Nombre=$request->Nombre;
        $flashcard->id_coleccion=$request->id_coleccion;
        $flashcard->Pregunta=$request->Pregunta;
        $flashcard->Respuesta=$request->Respuesta;
        $flashcard->save();
        return $flashcard;
        
    }
    public function show($id){
        $collection=Flashcards::find($id);
        return response()->json($collection);
    }
    public function update(Request $request){
        $flashcard=Flashcards::findOrFail($request->id);
        $flashcard->Nombre=$request->Nombre;
        $flashcard->Pregunta=$request->Pregunta;
        $flashcard->Respuesta=$request->Respuesta;
        $flashcard->save();
        return $flashcard;
        
    }

    
    public function destroy($id){
        $collection =Flashcards::destroy($id);
        return response()->json($collection);
    }


}
