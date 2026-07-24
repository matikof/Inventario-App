import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../servicios/producto-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  imports: [FormsModule],
  templateUrl: './editar-producto.html'
})
export class EditarProducto implements OnInit{

  producto: Producto = new Producto();
  private productoService = inject(ProductoService)
  private ruta = inject(ActivatedRoute);
  id!: number;
  private cdr = inject(ChangeDetectorRef)
  private enrutador= inject(Router)

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params["id"];
    this.productoService.buscarProductoPorId(this.id).subscribe({
      next: (datos) =>{
        this.producto = datos ;
        this.cdr.detectChanges();
      },
      error: (error) => console.error("Error al intentar obtener el objeto del id: ", error)
    })
    
  }
  

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoService.modificarProducto(this.id, this.producto).subscribe({
      next: (datos) =>{
        this.irListaProductos();
      },
      error: (error)  => console.error("No se logro guardar los los cambios: ", error)
    })
  }

  irListaProductos(){
    this.enrutador.navigate(["productos"]);;
  }
}
