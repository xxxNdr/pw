1. Creato il progetto Laravel 12

```bash
   composer create-project laravel/laravel mio-progetto
```

2. Entrato nella cartella

```bash
   cd mio-progetto
```

3. Installato React 18

```bash
   npm install react react-dom
```

4. Installato i plugin necessari

```bash
   npm install -D @tailwindcss/vite @vitejs/plugin-react
```

5. Configurato vite.config.js (con laravel + react + tailwindcss v4)

6. Creato resources/css/app.css con solo

```bash
   @import "tailwindcss";
```

7. Creato resources/js/app.jsx (entry point React con createRoot)
