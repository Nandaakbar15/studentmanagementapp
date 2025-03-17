<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    /** @use HasFactory<\Database\Factories\MahasiswaFactory> */
    use HasFactory;
    protected $primaryKey = "id_mahasiswa";
    protected $table = "tbl_mahasiswa";
    protected $fillable = ['nama_mahasiswa', 'email_mahasiswa', 'NIM_mahasiswa', 'jurusan'];
}
