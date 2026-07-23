import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto-service';
import { Producto } from '../model/producto.model';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.html'
})
export class ProductoLista implements OnInit{

  productos!: Producto[];

  private productoService = inject(ProductoService);
  private cdr = inject(ChangeDetectorRef);

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
}
