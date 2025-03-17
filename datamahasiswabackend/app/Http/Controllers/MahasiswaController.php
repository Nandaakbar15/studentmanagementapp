<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;

class MahasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mahasiswa = Mahasiswa::all();
        return response()->json([
            'statusCode' => 200,
            'data' => $mahasiswa
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'nama_mahasiswa' => 'required',
            'email_mahasiswa' => 'required',
            'NIM_mahasiswa' => 'required',
            'jurusan' => 'required'
        ]);

        $mahasiswa = Mahasiswa::create($validate);

        return response()->json([
            'statusCode' => 200,
            'message' => 'New Data Mahasiswa is added!',
            'data' => $mahasiswa
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mahasiswa $mahasiswa)
    {
        return response()->json([
            'statusCode' => 200,
            'data' => $mahasiswa
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mahasiswa $mahasiswa)
    {
        $validate = $request->validate([
            'nama_mahasiswa' => 'required',
            'email_mahasiswa' => 'required',
            'NIM_mahasiswa' => 'required',
            'jurusan' => 'required'
        ]);

        $mahasiswa->update($validate);

        return response()->json([
            'statusCode' => 200,
            'message' => 'Mahasiswa is updated!',
            'data' => $mahasiswa
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mahasiswa $mahasiswa)
    {
        $mahasiswa->delete();
        return response()->json([
            'statusCode' => 201,
            'message' => 'Mahasiswa is deleted!'
        ], 201);
    }
}
