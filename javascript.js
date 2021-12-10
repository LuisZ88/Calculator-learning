// function saludo(){
//     console.log("Hola Mundo")
//     }

// nombre()
// saludo()
// nombre()

// var , let , const

// numerico
// string
// // boolean
// // array / objetos

// let numeroAlumnos = 23
// let numeroAlumnos2 = "23736487324 jfhdskjkljsd 74368.673472"

// console.log(typeof numeroAlumnos)
// console.log(typeof numeroAlumnos2)
// // console.log(numeroAlumnos)
// // console.log(numeroAlumnos2)

// // let verdad = true
// // let false2 = false
// // console.log(typeof verdad)
// // console.log(verdad)

// // let edadAlejandra = 30
// // let edadLuis = 25

// let alumno = {
//     edad: 25,
//     ciudad: "Zaragoza",
//     hobbies: {
//         juegos: "Mortal Kombat",
//         deportes:"Tenis"
//     }
// }
// console.log(alumno)
// console.log(alumno.hobbies.deportes)

// function name() {

// }

// function nombre(){
//     console.log("Luis")
// }

// function suma(a,b) {
//     let suma = a+b;
//     console.log(suma)
// }

// suma(2,5)
// suma(12,25)

// // let alumnos1 = ["Alejandra", "Luis", "Eduardo"]
// let alumnos2 = ["Lucia", "Irama", "Jesús"]

// function alumnos(tomates){
//     console.log(tomates[2]);
//     console.log(tomates[0])
// }

// alumnos(tomates)
//let operacion = "suma", "resta", "multiplicacion", "division"
let operacion;
let primerInput = document.getElementById("primerInput");
let segundoInput = document.getElementById("segundoInput");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let igual = document.getElementById("igual");
let resultado = document.getElementById("resultado");
let n0 = document.getElementById("n0");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let n7 = document.getElementById("n7");
let n8 = document.getElementById("n8");
let n9 = document.getElementById("n9");
let ce = document.getElementById("ce");
console.log(primerInput.value);
resultado.innerText = 0;
n0.addEventListener("click", function () {
  if (primerInput.value != 0) {
    if (!operacion && primerInput.value <= 99999) {
      primerInput.value += 0;
    } else if (
      segundoInput.value != 0 &&
      segundoInput.value <= 99999 &&
      operacion
    ) {
      segundoInput.value += 0;
    }
  }
});
n1.addEventListener("click", function () {
  if (!operacion && primerInput.value <= 99999) {
    primerInput.value += 1;
  } else if (segundoInput.value <= 99999 && operacion) {
    segundoInput.value += 1;
  }
});
n2.addEventListener("click", function () {
  if (!operacion && primerInput.value <= 99999) {
    primerInput.value += 2;
  } else if (segundoInput.value <= 99999 && operacion) {
    segundoInput.value += 2;
  }
});
n3.addEventListener("click", function () {
  if (!operacion && primerInput.value <= 99999) {
    primerInput.value += 3;
  } else if (segundoInput.value <= 99999 && operacion) {
    segundoInput.value += 3;
  }
});
n4.addEventListener("click", function () {
  if (!operacion && primerInput.value <= 99999) {
    primerInput.value += 4;
  } else if (segundoInput.value <= 99999 && operacion) {
    segundoInput.value += 4;
  }
});
n5.addEventListener("click", function () {
  if (!operacion && primerInput.value <= 99999) {
    primerInput.value += 5;
  } else if (segundoInput.value <= 99999 && operacion) {
    segundoInput.value += 5;
  }
});
n6.addEventListener("click", function () {
  if (!operacion && primerInput.value <= 99999) {
    primerInput.value += 6;
  } else if (segundoInput.value <= 99999 && operacion) {
    segundoInput.value += 6;
  }
});
n7.addEventListener("click", function () {
  if (!operacion && primerInput.value <= 99999) {
    primerInput.value += 7;
  } else if (segundoInput.value <= 99999 && operacion) {
    segundoInput.value += 7;
  }
});
n8.addEventListener("click", function () {
  if (!operacion && primerInput.value <= 99999) {
    primerInput.value += 8;
  } else if (segundoInput.value <= 99999 && operacion) {
    segundoInput.value += 8;
  }
});
n9.addEventListener("click", function () {
  if (!operacion && primerInput.value <= 99999) {
    primerInput.value += 9;
  } else if (segundoInput.value <= 99999 && operacion) {
    segundoInput.value += 9;
  }
});
ce.addEventListener("click", function ce() {
  primerInput.value = null;
  segundoInput.value = null;
  operacion = null;
  op.innerText = "";
  resultado.innerText = 0;
});

suma.addEventListener("click", function suma() {
  operacion = "suma";
});
resta.addEventListener("click", function () {
  operacion = "resta";
});
multiplicacion.addEventListener("click", function () {
  operacion = "multiplicacion";
});
division.addEventListener("click", function () {
  operacion = "division";
});

// resta.addEventListener("click", function resta() {
//   console.log(parseFloat(primerInput.value) - parseFloat(segundoInput.value));
//   resultado.innerText =
//     parseFloat(primerInput.value) - parseFloat(segundoInput.value);
// });

// multiplicacion.addEventListener("click", function multiplicacion() {
//   console.log(parseFloat(primerInput.value) * parseFloat(segundoInput.value));
//   resultado.innerText =
//     parseFloat(primerInput.value) * parseFloat(segundoInput.value);
// });

// division.addEventListener("click", function division() {
//   console.log(parseFloat(primerInput.value) / parseFloat(segundoInput.value));
//   resultado.innerText =
//     parseFloat(primerInput.value) / parseFloat(segundoInput.value);
// });

igual.addEventListener("click", function igual() {
  if (operacion == "suma") {
    resultado.innerText =
      parseFloat(primerInput.value) + parseFloat(segundoInput.value);
    op.innerText = primerInput.value + "+" + segundoInput.value + "=";
    primerInput.value = null;
    segundoInput.value = null;
    operacion = null;
  } else if (operacion == "resta") {
    resultado.innerText =
      parseFloat(primerInput.value) - parseFloat(segundoInput.value);
    op.innerText = primerInput.value + "-" + segundoInput.value + "=";
    primerInput.value = null;
    segundoInput.value = null;
    operacion = null;
  } else if (operacion == "multiplicacion") {
    resultado.innerText =
      parseFloat(primerInput.value) * parseFloat(segundoInput.value);
    op.innerText = primerInput.value + "x" + segundoInput.value + "=";
    primerInput.value = null;
    segundoInput.value = null;
    operacion = null;
  } else if (operacion == "division") {
    resultado.innerText = (
      parseFloat(primerInput.value) / parseFloat(segundoInput.value)
    ).toFixed(2);
    op.innerText = primerInput.value + "÷" + segundoInput.value + "=";
    primerInput.value = null;
    segundoInput.value = null;
    operacion = null;
  }
});
