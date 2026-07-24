import { Routes } from '@angular/router';
import { ProductoLista } from './producto-lista/producto-lista';
import { CrearProducto } from './crear-producto/crear-producto';
import { EditarProducto } from './editar-producto/editar-producto';

export const routes: Routes = [
    {path: "productos", component: ProductoLista},
    {path: "", redirectTo: "productos", pathMatch: "full"},
    {path: "crear-producto", component: CrearProducto},
    {path: "editar-producto/:id", component: EditarProducto}
];
