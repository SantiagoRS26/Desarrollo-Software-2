import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';

interface Character {
  id: number;
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css',
})
export class DragonballSuper {
  nombrePersonaje = signal('');
  nivelPoder = signal(0);

  listaPersonajes = signal<Character[]>([
    { id: 1, nombre: 'Goku', poder: 10000 },
    { id: 2, nombre: 'Vegeta', poder: 5000 },
    { id: 3, nombre: 'Cell', poder: 8000 },
    { id: 4, nombre: 'Yamcha', poder: 500 },
  ]);

  agregarPersonaje() {
    if (
      !this.nombrePersonaje() ||
      !this.nivelPoder() ||
      this.nivelPoder() < 0
    ) {
      return;
    }

    const nuevoPersonaje: Character = {
      id: this.listaPersonajes().length + 1,
      nombre: this.nombrePersonaje(),
      poder: this.nivelPoder(),
    };

    this.listaPersonajes.update((lista) => [...lista, nuevoPersonaje]);
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.nombrePersonaje.set('');
    this.nivelPoder.set(0);
  }
}
