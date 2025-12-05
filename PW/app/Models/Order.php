<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

use function Symfony\Component\Clock\now;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome-cliente',
        'email-cliente',
        'nome-prodotto',
        'quantita',
        'descrizione',
        'prezzo',
        'spedito',
    ];

    // attributi virtuali
    protected $appends = [
        'data-spedizione'
    ];

    // getter per data-spedizione
    public function getDataSpedizione()
    {
        if ($this->spedito) {
            // genera data di spedizione casuale ultimi 30 gg
            return Carbon::now()->subDays(rand(1, 30))->format('d/m/Y');
        }
        // se non è spedito = null
        return null;
    }
}
