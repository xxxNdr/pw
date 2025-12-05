// importa createRoot da react-dom/client per montare l'app
import { createRoot } from "react-dom/client";
// seleziona l'elemento html dal DOM in welcome.blade.php
createRoot(document.getElementById("app"))
    // con id app e sostituisci il contenuto con ↓
    .render(
        /* div che occupa almeno tutta l'altezza dello schermo
        gradiente da sx a dx */
        <div className="min-h-screen bg-radial at-center from-purple-400 to-pink-950 flex items-center justify-center text-white">
            {/* contenitore centrato per il testo */}
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-500 filter drop-shadow-[0_4px_6px_rgb(0,0,0)]">
                    Ciao
                </h1>
                <h3 className="text-2xl tracking-wider filter drop-shadow-[0_1px_1px_rgb(0,0,0)]">
                    sono il Project Work
                </h3>
            </div>
        </div>
    );
