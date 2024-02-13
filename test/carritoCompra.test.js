const {CarritoCompras} = require('../index')

// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

// constructor(): Inicializa el carrito como un array vacío.

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

// Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.



describe("La clase 'CarritoCompras'", () => {
    it('Debe retornar un array vacío', () => {
        const carrito = new CarritoCompras();
        expect(carrito.itemsCarrito()).toEqual([]);
    })
    it('Recibir un producto y agregarlo al carrito',()=>{
        const carrito = new CarritoCompras();
        const producto = {nombre: "Desodorante",precio:10}
        carrito.agregarCarrito(producto);
        expect(carrito.itemsCarrito()).toContainEqual(producto);
    })

    it('Calcular el total de la compra sumando todos los precios del carrito',()=>{
       
            const carrito = new CarritoCompras();
            const producto1 = { nombre: "Desodorante", precio: 10 };
            const producto2 = { nombre: "Champú", precio: 5 };
            const producto3 = { nombre: "Crema", precio: 8 };
            
            carrito.agregarCarrito(producto1);
            carrito.agregarCarrito(producto2);
            carrito.agregarCarrito(producto3);
            
            expect(carrito.calcularTotal()).toBe(23); 
        });
    })
