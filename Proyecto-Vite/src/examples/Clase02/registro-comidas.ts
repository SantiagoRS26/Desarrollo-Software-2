import type { Comida } from "./comida";
import { ServicioComida } from "./servicio-comida";

export class RegistroComidas {
	private servicioComida: ServicioComida;

	constructor(servicioComida: ServicioComida) {
		this.servicioComida = servicioComida;
	}

	registrarComida(comida: Comida): void {
		console.log("Registrando comida...");
		this.servicioComida.mostrarInformacion(comida);
		console.log("");
	}
}
