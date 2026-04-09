let edad = prompt("Ingrese su edad");

if (isNaN(edad)) {
    alert("Por favor ingrese un número válido");
} else if (edad < 18) {
    alert("Acceso denegado");
} else {
    alert("Bienvenido");
}

let edad = prompt("Ingrese su edad:");

if (isNaN(edad)) {
  alert("Por favor ingrese un número válido");
} else if (edad < 18) {
  alert("Acceso denegado");
} else {
  alert("Bienvenido");
}

let topping = prompt("Elija topping: Oreo, KitKat o Brownie");
let precio = 5;

switch (topping.toLowerCase()) {
  case "oreo":
    precio += 2;
    break;
  case "kitkat":
    precio += 3;
    break;
  case "brownie":
    precio += 4;
    break;
  default:
    alert("Topping no válido");
}

alert("Precio final: $" + precio);