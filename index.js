// Archivo JavaScript con malas prácticas intencionalmente

// Variables globales sin declaración apropiada
x = 10;
y = "texto";
z = true;

// Uso de var en lugar de let/const
var datos = [1,2,3];

// Comparaciones no estrictas
if (1 == "1") {
    console.log("esto es verdadero!");
}

// Nombres de variables poco descriptivos
function a(b,c) {
    return b+c;
}

// Anidamiento excesivo de condicionales
function verificar(num) {
    if(num > 0) {
        if(num < 100) {
            if(num % 2 == 0) {
                return true;
            }
        }
    }
    return false;
}

// Uso de eval()
eval("console.log('código peligroso')");

// Mezcla de idiomas en nombres
function calcularTotal(precio) {
    return precio + impuesto;
}

// Variable no declarada que causará error
console.log(impuesto);

// Función que modifica variables globales
function modificarGlobal() {
    x = x + 1;
    y = y + "más texto";
}

// Código sin punto y coma
let numero = 42
console.log(numero)

// setTimeout sin clearTimeout
setTimeout(function() {
    alert("Popup molesto!");
}, 3000)

// Evento inline (aunque esto iría en HTML)
// <button onclick="alert('click')">Click me</button>
