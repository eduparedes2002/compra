import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  idproducto:number;
  producto:Producto;


  constructor(private router:Router,private service:ServiceService,private route:ActivatedRoute) { }



  ngOnInit(): void {
   // this.producto=new Producto();
    this.idproducto=this.route.snapshot.params['idproducto'];
    this.service.detail(this.idproducto).subscribe(

      data=>{console.log(data)
      this.producto=data;
      },
      error=>console.log(error));
    
  }

  onSubmit(){
   
    this.service.update(this.idproducto,this.producto).subscribe(
      data=>console.log(data),error=>console.error());
      //this.producto=new Producto();
      swal(`Producto actualizado con exito`)
      this.router.navigate(['/lista']);
      
    
  }

  
}
