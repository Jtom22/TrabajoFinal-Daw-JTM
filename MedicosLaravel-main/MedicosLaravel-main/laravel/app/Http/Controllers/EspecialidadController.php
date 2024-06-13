<?php

namespace App\Http\Controllers;

use App\Models\Medico;
use Illuminate\Http\Request;
use App\Models\Especialidad;

class EspecialidadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $especialidades = Especialidad::all();
        return view('index', compact('especialidades'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'codigo' => 'required',
            'descripcion' => 'required',
        ]);

        Especialidad::create($request->all());

        return redirect()->route('especialidades.index')
            ->with('success', 'Especialidad creada exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $especialidad = Especialidad::findOrFail($id);
        return view('show', compact('especialidad'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $especialidad = Especialidad::findOrFail($id);
        return view('edit', compact('especialidad'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $request->validate([
            'codigo' => 'required',
            'descripcion' => 'required',
        ]);

        $especialidad = Especialidad::findOrFail($id);
        $especialidad->update($request->all());

        return redirect()->route('especialidades.index')
            ->with('success', 'Especialidad actualizada exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $especialidad = Especialidad::findOrFail($id);
        $especialidad->delete();

        return redirect()->route('especialidades.index')
            ->with('success', 'Especialidad eliminada exitosamente.');
    }

    public function medicos($especialidadId)
    {
        $especialidad = Especialidad::findOrFail($especialidadId);
        $medicos = Medico::where('especialidad_id', $especialidad->id)->get();

        return view('medicos', compact('especialidad', 'medicos'));
    }
}
