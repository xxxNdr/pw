export default function Home() {
    return (
        /* div che occupa almeno tutta l'altezza dello schermo
        gradiente da sx a dx */
        <div className="min-h-screen anime flex items-center justify-center text-white">
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
}
