import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Producto } from '../Modelo/Producto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class ServiceService {

  productoURL = 'http://localhost:9092/producto/';
  
  constructor(private httpClient:HttpClient) { }

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista');
  }

  public detail(idproducto: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detail/${idproducto}`);
  }

  public detailName(nombre: string): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detailname/${nombre}`);
  }

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', producto);
  }

  public update(idproducto: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `update/${idproducto}`, producto);
  }

  public delete(idproducto: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${idproducto}`);
  }
}
