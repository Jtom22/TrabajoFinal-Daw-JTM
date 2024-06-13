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
        //
        Schema::table('collections', function (Blueprint $table) {
            $table->unsignedBigInteger('usuario_id')->unsigned()->after("id");        
            $table->foreign('usuario_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        
        Schema::table('collections', function (Blueprint $table) {
            $table->dropForeign('usuario_id_foreign');
            $table->dropColumn('usuario_id');
        });
    }
};
