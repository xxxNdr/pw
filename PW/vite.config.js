// importa la funzione principale di configurazione vi vite
import { defineConfig } from "vite";
// plugin ufficiale che collega laravel a vite
import laravel from "laravel-vite-plugin";
// plugin che abilita react 18, jsx, fast refresh
import react from "@vitejs/plugin-react";
// plugin ufficiale tailwind v4 per vite 2025
import tailwindcss from "@tailwindcss/vite";
// esporta la configurazione completa
export default defineConfig({
    // lista dei plugin da usare
    plugins: [
        // inizia il plugin laravel
        laravel({
            // specifica i file che vite deve processare
            input: [
                // file css con tailwind 4
                "resources/css/app.css",
                // file principale react
                "resources/js/app.jsx",
            ],
            // abilita il refresh automatico quando modifico blade o route
            refresh: true,
        }),
        // abilita react con fast refresh
        react(),
        // abilita tailwind v4, rileva classi automaticamente
        tailwindcss(),
    ],
});
