interface UsuarioInterface {
	id: number;
	nombre: string;
	email: string;
	activo: boolean;
	roles: string[];
	direccion: DireccionInterface;
	saludar: () => void;
	actualizarEmail: (nuevoEmail: string) => void;
}

function saludar(usuario: UsuarioInterface) {
	usuario.saludar();
}

function actualizarEmail(usuario: UsuarioInterface, nuevoEmail: string) {
	usuario.email = nuevoEmail;
}

interface DireccionInterface {
	ciudad: string;
	pais: string;
}

const usuario: UsuarioInterface = {
	id: 1,
	nombre: "Santiago",
	email: "santiago@gmail.com",
	activo: true,
	roles: ["admin", "user"],
	direccion: {
		ciudad: "Medellín",
		pais: "Colombia",
	},
	saludar: function () {
		console.log(`Hola, mi nombre es ${this.nombre}`);
	},
	actualizarEmail: function (nuevoEmail: string) {
		this.email = nuevoEmail;
	},
};
