
class CarritoCompras{
    constructor(){
        this.carrito = []
    }

    itemsCarrito(){
        return this.carrito;
    }

    agregarCarrito(producto){
        this.carrito.push(producto)
        return producto
    }

    calcularTotal(){
        return this.carrito.reduce((total, producto) => total + producto.precio, 0);
    }
}

module.exports={CarritoCompras}