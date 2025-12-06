<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    public function definition(): array
    {
        // Restituisce array con dati finti per ogni colonna della migration
        return [
            'nome-cliente' => $this->faker->name(),
            'email-cliente' => $this->faker->safeEmail(),
            // true = unisci le parole dell'array in un'unica stringa
            'nome-prodotto' => $this->faker->words(2, true),
            'quantita' => $this->faker->numberBetween(1, 10),
            'descrizione' => $this->faker->paragraph(2),
            'prezzo' => $this->faker->randomFloat(2, 10, 5000),
            'spedito' => $this->faker->boolean()
        ];
    }
}
