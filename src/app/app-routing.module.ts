import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Producto/add/add.component';
import { CompraComponent } from './Producto/compra/compra.component';
import { EditComponent } from './Producto/edit/edit.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'', component: IndexComponent },
  {path:'login',component: LoginComponent},
  {path:'registro',component: RegistroComponent },
  {path:'lista',component:ListarComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  //{path:'',redirectTo:'lista',pathMatch:'full'},
  {path:'add',component:AddComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'edit/:idproducto',component:EditComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path:'compra/:idproducto',component:CompraComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
