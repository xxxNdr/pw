// importa libreria react principale
import React from "react";
// importa createRoot da react-dom/client per montare l'app
import { createRoot } from "react-dom/client";
// seleziona l'elemento html dal DOM in layouts/app.blade.php
createRoot(document.getElementById("app"))
    // con id app e sostituisci il contenuto con ↓
    .render(
        /* div che occupa almeno tutta l'altezza dello schermo
        gradiente da sx a dx */
        <div className="min-h-screen bg-gradient-to-r from-purple-400 to-pink-900 flex items-center justify-center text-white">
            {/* contenitore centrato per il testo */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-blue-500">Bella Lì!</h1>
            </div>
        </div>
    );
