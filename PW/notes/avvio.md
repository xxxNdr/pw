1. Creato il progetto Laravel 12

```bash
   composer create-project laravel/laravel mio-progetto
```

2. Installato React 18

```bash
   npm install react react-dom
```

3. Installato i plugin necessari

```bash
   npm install -D @tailwindcss/vite @vitejs/plugin-react
```

4. Configurato vite.config.js (con laravel + react + tailwindcss v4)

```js
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
});
```

5. Creato resources/css/app.css con solo

```bash
   @import "tailwindcss";
```

6. Creato resources/js/app.jsx (entry point React con createRoot)
