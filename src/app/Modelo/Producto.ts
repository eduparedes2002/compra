export class Producto {
    idproducto: number;
    nombre: string;
    stock: number;
    precio: number;
    cantidad: number;
    estado: string;
    imagen: string;
  
    constructor(nombre: string, stock: number, precio: number, cantidad: number, estado: string, imagen: string) {
      this.nombre = nombre;
      this.stock = stock;
      this.precio = precio;
      this.cantidad = cantidad;
      this.estado = estado;
      this.imagen = imagen;
    }
  }
  