// CUORE DELL'APP REACT

// BrowserRoute = abilita la navigazione SPA cambia URL senza refresh
// Routes = il contenitore di tutte le rotte
// Route = una singola rotta
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

// componente principale dell'app esportato così react lo usa in index.jsx
export default function App() {
    // BrowserRouter deve avvolgere tutto quello che usa routing
    <BrowserRouter>
        {/* navbar sempre visibile a prescindere dalla route */}
        <NavBar />
        {/* qui react decide cosa mostrare in base all'URL */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            {/* qualsiasi altro URL vai a home senza 404 */}
            <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>;
}
