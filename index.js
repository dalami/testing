
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

    aplicarDescuento(porcentaje) {
        const descuento = (porcentaje / 100) * this.total;
        this.total -= descuento;
    }
}

module.exports={CarritoCompras}