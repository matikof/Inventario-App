import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto-service';
import { Producto } from '../model/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.html'
})
export class ProductoLista implements OnInit{

  productos!: Producto[];

  private productoService = inject(ProductoService);
  private cdr = inject(ChangeDetectorRef);
  private enrutador = inject(Router)

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    return this.productoService.obtenerProductos().subscribe({
      next: (datos) => {
        this.productos = datos;
        this.cdr.detectChanges()
      },
      error: (error) => console.error("Error al intentar obtener los productos: " , error)
    })
  }

  editarProducto(id: number){
    this.enrutador.navigate(["editar-producto/" + id])
  }

  eliminarProducto(id: number){
    this.productoService.eliminarProducto(id).subscribe({
      next: (datos) => this.obtenerProductos(),
      error: (error) => console.error("No se pudo eliminar el producto: ", error)
    })
  }
}
