import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Producto } from 'src/app/Modelo/Producto';
import {ServiceService} from '../../Service/service.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  idproducto:number
  producto:Producto
  constructor(private router:ActivatedRoute,private service:ServiceService,private rout:Router) { }

  ngOnInit(): void {
    this.idproducto=this.router.snapshot.params['idproducto'];
    //this.producto=new Producto();
    this.service.detail(this.idproducto).subscribe(

      data=>{console.log(data)
      this.producto=data;
      },
      error=>console.log(error));
  }


  
  ComprarProducto(){
    swal(`${this.producto.nombre} comprad@ con exito`)
    this.rout.navigate(['/lista']);
  }

}
