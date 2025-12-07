import { Link } from "react-router-dom";
/* Link = componente ReactRouter che cambia pagina senza ricaricare tutto
a differenza di href che farebbe refresh completo */

export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <div className="flex space-x-16 text-xl font-semibold">
                    <Link to={"/"} className="hover:text-cyan-400 transition duration-300">Home
                    </Link>
                    <Link to={"/orders"} className="hover:text-cyan-400 transition duration-300"
                    >Ordini</Link>
                </div>
            </div>
        </nav>
    );
}
