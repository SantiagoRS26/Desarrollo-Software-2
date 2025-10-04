import type { Comida } from "./comida";

export class ServicioComida {
	mostrarInformacion(comida: Comida): void {
		const { nombre, calorias, esVegetariana } = comida;
		console.log(
			`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegetariana?: ${esVegetariana}`
		);
	}

	actualizarCalorias(comida: Comida, nuevasCalorias: number): Comida {
		return {
			...comida,
			calorias: nuevasCalorias,
		};
	}
}
