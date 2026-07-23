import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../servicios/producto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  imports: [FormsModule],
  templateUrl: './crear-producto.html'
})
export class CrearProducto {

  producto: Producto = new Producto();
  private productoService = inject(ProductoService)
  private enrutador = inject(Router);

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoService.crearProducto(this.producto).subscribe({
      next: (datos) =>{
        this.irListaProductos();
      },
      error: (error)=> console.error("Error al crear producto: ", error)
    })
  }

  irListaProductos(){
    this.enrutador.navigate(["productos"]);
  }
}
