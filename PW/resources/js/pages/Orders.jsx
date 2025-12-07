// useState → per salvare la lista in memoria
// useEffect → per caricare i dati quando la pagina si apre
import { useState, useEffect } from "react";

export default function Orders() {
    // stato che contiene tutti gli ordini (inizialmente vuoto)
    const [orders, setOrders] = useState([]);

    // caricamento che si esegue solo una volta quando la pagina si apre
    useEffect(() => {
        // chiamo la rotta API creata con apiResources
        fetch("/api/orders")
            // converto la rispsota in oggetto JS
            .then((res) => res.json())
            // salvo i dati nello stato
            .then((data) => setOrders(data));
        // [] esegui solo al primo render
    }, []);

    return (
        // sfondo
        <div className="min-h-screen bg-gray-900 text-white p-10">
            {/* titolo */}
            <h1 className="text-5xl font-bold text-center mb-12">Ordini</h1>
            {/* tabella */}
            <div className="max-w-7xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                <table className="w-full text-center">
                    {/* intestazione */}
                    <thead className="bg-gray-700 text-gray-200 uppercase text-sm">
                        <tr>
                            <th className="px-6 py-4 text-center">Cliente</th>
                            <th className="px-6 py-4 text-center">Email</th>
                            <th className="px-6 py-4 text-center">Prodotto</th>
                            <th className="px-6 py-4 text-center">Quantità</th>
                            <th className="px-6 py-4 text-center">
                                Descrizione
                            </th>
                            <th className="px-6 py-4 text-center">Prezzo</th>
                            <th className="px-6 py-4 text-center">Spedito</th>
                        </tr>
                    </thead>

                    {/* corpo */}
                    {/* divide = bordo righe */}
                    <tbody className="divide-y divide-gray-700">
                        {orders.length === 0 ? (
                            // se non ci sono ordini o mentre carica
                            <tr>
                                <td
                                    colSpan={6}
                                    className="text-center py-16 text-gray-500 text-xl"
                                >
                                    Caricamento ordini in corso...
                                </td>
                            </tr>
                        ) : (
                            // ciclo su ogni ordine
                            orders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="hover:bg-gray-700 transition"
                                >
                                    <td className="px-6 py-4 font-medium text-center">
                                        {order["nome-cliente"]}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-center">
                                        {order["email-cliente"]}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-center">
                                        {order["nome-prodotto"]}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-center">
                                        {order["quantita"]}
                                    </td>
                                    {/* Number = interpreta il dato come int e non str */}
                                    <td className="px-6 py-4 font-medium text-center">
                                        €{Number(order["prezzo"]).toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-center">
                                        {order["spedito"] === 1 ? (
                                            <span className="text-green-400 font-bold">
                                                Sì
                                            </span>
                                        ) : (
                                            <span className="text-red-500 font-bold">
                                                No
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
