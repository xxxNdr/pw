// BOOTSTRAP DELL'APP REACT

// avvia react e monta il componente principale App
// importa createRoot da react-dom/client per montare l'app
import { createRoot } from "react-dom/client";
import App from "./components/App";

/* seleziona l'elemento html dal DOM in welcome.blade.php
e inietta react */
createRoot(document.querySelector("#root")).render(<App />);
