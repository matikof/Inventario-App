import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('inventario-app');
}
