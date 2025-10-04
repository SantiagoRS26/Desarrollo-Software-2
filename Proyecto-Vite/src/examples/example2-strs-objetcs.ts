let arreglo: string[] = ["Santiago", "Roldan", "Mendoza"];

interface PersonaInterface {
	nombre: string;
	edad: number;
}

const persona: PersonaInterface = {
	nombre: "Santiago",
	edad: 20,
};

function sumar(a: number, b: number): number {
	return a + b;
}

const a: number = 10;
const b: number = 20;
const resultado: number = sumar(a, b);

console.log(persona);
console.log(resultado);
console.log(arreglo);
