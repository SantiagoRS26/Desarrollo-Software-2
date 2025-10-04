import { ServicioComida } from "./servicio-comida";
import { RegistroComidas } from "./registro-comidas";
import { tacos, ensalada, pasta } from "./comidas";

const servicioComida = new ServicioComida();
const registro = new RegistroComidas(servicioComida);

registro.registrarComida(tacos);
registro.registrarComida(ensalada);
registro.registrarComida(pasta);

const tacosModificados = servicioComida.actualizarCalorias(tacos, 500);
registro.registrarComida(tacosModificados);
