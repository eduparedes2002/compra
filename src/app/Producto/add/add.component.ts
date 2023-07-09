import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'] // Agrega el nombre del archivo CSS aquí
})

export class AddComponent implements OnInit {

  nombre = '';
  stock: number;
  precio: number;
  cantidad: number;
  estado = '';
  imagen: '';

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarProducto() {
    swal(`Producto registrado con exito`)
    const producto = new Producto(this.nombre, this.stock, this.precio, this.cantidad,
      this.estado, this.imagen);
    this.service.save(producto).subscribe(dato => {
      console.log(dato);
      this.irAlalistadeProductos();
    }, error => console.log(error));
  }

  irAlalistadeProductos() {
    this.router.navigate(['/lista']);
  }

  onSubmit() {
    this.guardarProducto();
  }

  onFileChange(event: any) {
    this.imagen = event.target.files[0];
  }
}
