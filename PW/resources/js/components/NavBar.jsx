export default function NavBar() {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <a href="/" className="hover:text-cyan-400">
                    Home
                </a>
                <a href="/orders" className="hover:text-cyan-400">
                    Ordini
                </a>
            </div>
        </nav>
    );
}
