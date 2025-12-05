<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->integer('quantita');
            $table->text('descrizione');
            $table->decimal('prezzo', 6, 2);
            $table->boolean('in_produzione')->default(true);
            $table->timestamps('creato_il');
            $table->timestamps('modificato_il');
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
