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
    setInterval(() => {
      this.valorActual += 1;
      this.contadorSignal.update((val) => val + 1);
      console.log('Contador actualizado automáticamente.');
    }, 1000);
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
