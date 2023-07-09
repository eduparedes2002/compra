import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import swal from 'sweetalert2';
import {ServiceService} from '../../Service/service.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../Service/token.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos:Producto[]=[];
  roles: string[];
  isAdmin = false;

  constructor(private service:ServiceService,private router:Router,
    private toastr: ToastrService,
    private tokenService: TokenService ) { }

  ngOnInit():void{
    this.obtenerProducto();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  private obtenerProducto(){
    this.service.lista()
    .subscribe(data=>{
     this.productos=data;
    });
  }

  obtenerProductoPorId(idproducto:number){
    this.service.detail(idproducto);
  }
  actualizarProducto(idproducto:number){
    this.router.navigate(['edit',idproducto])
  }

  eliminarProducto(idproducto:number){
    swal({
      title:'¿Estas seguro?',
      text:"Confirma si deseas eliminar el producto",
      type:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Si,eliminalo',
      cancelButtonText:'No,cancelar',
      confirmButtonClass:'btn btn-success',
      cancelButtonClass:'btn btn-danger',
      buttonsStyling:true
    }).then((result) => {
      if(result.value){
        this.service.delete(idproducto).subscribe(data=>{
          console.log(data);
          this.obtenerProducto();
          swal(
            'Producto eliminado',
            'El producto ha sido eliminado con exito',
            'success'
          )
        
      })
    }
    })
    }
  
    
    
    compra(idproducto:number){
      this.router.navigate(['compra',idproducto])
    }
  }
