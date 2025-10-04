import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  valorActual: number = 0;
  contadorSignal = signal(0);

  constructor() {
    // Constructor limpio - el contador solo se actualiza con los botones
  }

  incrementar(cantidad: number) {
    this.valorActual += cantidad;
    this.contadorSignal.update((val) => val + cantidad);
  }

  decrementar(cantidad: number) {
    this.valorActual -= cantidad;
    this.contadorSignal.update((val) => val - cantidad);
  }

  reiniciar() {
    this.valorActual = 0;
    this.contadorSignal.set(0);
  }
}
