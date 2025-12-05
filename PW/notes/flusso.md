# COMANDO MAGICO

```bash
php artisan make:model Order -mfcrs --api
```

--api = non crea un controller normale con 7 metodi
ma con solo 5 metodi da usare in react
quelli che restituiscono JSON
senza api avrei avrei anche i metodi create ed edit che sono per le viste blade
e a me non servono perché uso react

## COSA CREA

-   app/Models/Order.php → il Model
-   database/migrations/xxxx_create_orders_table.php → la tabella nel DB
-   database/factories/OrderFactory.php → per creare ordini finti
-   app/Http/Controllers/OrderController.php → con dentro già queste 5 funzioni pronte
    -   index() → lista tutti gli ordini
    -   store() → crea nuovo ordine
    -   show() → prende un ordine
    -   update() → modifica ordine
    -   destroy() → cancella ordine
-   database/seeders/OrderSeeder.php → per riempire il DB con dati di esempio

## CREA LA MIGRATION DELLA TABELLA ORDERS

## MODIFICA IL MODEL ORDER
