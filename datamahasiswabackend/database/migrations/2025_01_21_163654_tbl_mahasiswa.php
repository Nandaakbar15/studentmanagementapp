<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tbl_mahasiswa', function (Blueprint $table) {
            $table->id("id_mahasiswa");
            $table->string("nama_mahasiswa");
            $table->string("email_mahasiswa");
            $table->string("NIM_mahasiswa");
            $table->string("jurusan");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_mahasiswa');
    }
};
