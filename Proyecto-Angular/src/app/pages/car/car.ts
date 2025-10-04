import { Component, computed, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-car',
  templateUrl: './car.html',
  styleUrl: './car.css',
  imports: [UpperCasePipe],
})
export class CarComponent {
  marca = signal('Renault');
  estudiante = signal('santiago roldan - 202012345');
  anio = signal(2020);
  descripcionCompleta = computed(() => `${this.marca()} - Año ${this.anio()}`);
  estudianteFormateado = computed(() => formatearTexto(this.estudiante()));

  cambiarVehiculo() {
    this.marca.set('Kia');
    this.anio.set(2021);
  }

  restaurarDatos() {
    this.marca.set('Renault');
    this.anio.set(2020);
  }

  actualizarAnio() {
    this.anio.set(2025);
  }
}

function formatearTexto(texto: string): string {
  return texto
    .split(' ')
    .map(
      (palabra) =>
        palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )
    .join(' ');
}
