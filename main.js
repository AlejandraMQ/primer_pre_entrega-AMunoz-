// Función encargada de validar que sea un valor numérico (entero o flotante)
function validar(numero, cadena) {
  const esNaN = Number.isNaN(numero);
  const IngresoCorrecto = numero.toString() === cadena;
  return !esNaN && IngresoCorrecto;
}

// Función encargada del ingreso de datos
function ingresoDatos(msg) {
  ingreso = prompt(msg);
  if (/[.]/.test(ingreso)) {
    while (ingreso[ingreso.length - 1] === "0") {
      ingreso = ingreso.substring(0, ingreso.length - 1);
    }
  }
  valor = parseFloat(ingreso);
  if (validar(valor, ingreso)) {
    return valor;
  } else {
    return false;
  }
}

// declaración del saldo inicial de la cuenta
let saldo = 1000;
// Variable encargada de mantener el ciclo iterativo
let opcion;
do {
  let valor;
  opcion = prompt(
    "¿Qué desea hacer?\n1. Consignar\n2. Retirar\n3. Saldo\n4. Salir "
  );
  switch (opcion) {
    // Caso de deposito o consignación de dinero
    case "1":
      valor = ingresoDatos("Digite el valor a consignar:");
      if (valor === false) {
        alert("Valor ingresado es incorrecto, reintentar");
      } else if (valor >= 0) {
        saldo += valor;
        alert("Accion realizada correctamente. saldo: " + saldo);
      } else {
        alert("No se puede consignar valor negativo");
      }
      break;
    // caso de retiro de dinero
    case "2":
      valor = ingresoDatos("Digite el valor a retirar:");
      if (valor === false) {
        alert("Valor ingresado es incorrecto, reintentar");
      } else if (valor < 0) {
        alert("No se puede retirar un valor negativo");
      } else if (valor > saldo) {
        alert("No se realizo la acción por falta de saldo. saldo: " + saldo);
      } else {
        saldo -= valor;
        alert("Accion realizada correctamente. Saldo: " + saldo);
      }
      break;
    // Caso de consulta de saldo
    case "3":
      alert("Su saldo es: " + saldo);
      break;
    // Caso de cierre del programa
    case "4":
      alert("Hasta luego!");
      break;
    // caso en el cual no se cumple ninguno de los anteriores
    default:
      alert("Opción no valida");
      break;
  }
} while (opcion !== "4");
