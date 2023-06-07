//Condicionales

if (true) {
    console.log("vas a ver este mensaje");
}

/////////////////////////////////////////////////////

let numero = 7
if (numero == 5){
    console.log("El nuemero es 5");
}
else{
    console.log("El numero no es 5 :(");
}

/////////////////////////////////////////////////////

let nombre_usuario = prompt("Ingresar nombre de usuario: ");
if (nombre_usuario == "") {
    alert("No ingreso el nombre de usuario.");
}
else{
    alert("Nombre de usuario ingresado: " + nombre_usuario)
    console.log("Bienvenid@ " + nombre_usuario)
}

/////////////////////////////////////////////////////

let precio = 100.5;
if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}
console.log("El precio es: " + precio)

/////////////////////////////////////////////////////

// let numero2 = 10;
// let esmayor = (numero2 > 5);
// if (estrue) { 
//     alert("Es true")
// }

/////////////////////////////////////////////////////

let ingnombre = prompt("Ingresar nombre: ");
let ingapellido = prompt("Ingresar apellido: ");

if((ingnombre != "") && (ingapellido != "")){
    alert("Nombre: " + ingnombre + "\nApellido: " + ingapellido)
    console.log("Nombre: " + ingnombre + "\nApellido: " + ingapellido)
}else{
    alert("Error: Ingresar nombre y apellido")
}

/////////////////////////////////////////////////////

let nom = prompt("Ingresar nombre: ")
if((nom == "ANA") || (nom == "ana")){
    alert("El nombre infresado es Ana");
    console.log("Bienvenida Ana!");
}else{
    alert("El nombre ingresado NO es Ana");
}

/////////////////////////////////////////////////////
let inom = prompt("Ingresar nombre: ")
if ((inom != "") && ((inom == "EMA" )|| (inom == "ema"))){
    alert("Hola Ema");
    console.log("Hola Ema");
}else{
    alert("Error: Ingresar nombre valido.");
}

/////////////////////////////////////////////////////
//Ejemplo//
/////////////////////////////////////////////////////
alert("------ Ejemplo ------")
console.log(" ")
console.log(" -------------------------------")
console.log(" ----------- Ejemplo ----------- ")
console.log(" -------------------------------")
console.log(" ")

let num1000 = prompt("Ingrese un numero: ")
let texto = prompt("Ingrese un saludo: ")
let numentre = prompt("Ingrese un numero: ")

if (num1000 > 1000){
    alert("El numero "+num1000 + "es mayor que 1000")
    console.log(num1000+"es mayor que 1000")
}else{
    alert("El numero "+num1000 + "es menor que 1000")
    console.log(num1000+"es menor que 1000")
}

if ((texto != "") && (texto == "Hola")){
    alert("Hola!")
    consolole.log("Hola!")
}else{
    alert("Error: Texto INCORRECTO")
}

if ((numentre > 10) && (numentre < 50)){
    alert("El numero"+numentre+" esta entre 10 y 50")
    console.log("El numero"+numentre+" esta entre 10 y 50")
}else{
    alert("El numero"+numentre+" NO esta entre 10 y 50")
    console.log("El numero"+numentre+" NO esta entre 10 y 50")   
}