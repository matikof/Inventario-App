import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
    providedIn: "root"
})
export class ProductoService {

    private urlBase = "http://localhost:8080/api/v1";
    
    constructor(private clienteHttp: HttpClient){}





    obtenerProductos(): Observable<Producto[]>{
        return this.clienteHttp.get<Producto[]>(this.urlBase + "/todos");
    }


    crearProducto(producto: Producto): Observable<Object>{
        return this.clienteHttp.post(this.urlBase + "/crear", producto)
    }

}
