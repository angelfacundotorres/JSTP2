
//  1)

// let edad = parseInt(prompt('Ingresa tu edad'))

// if (edad > 17 && edad < 85) {
//   alert('Tienes la edad necesaria para conducir')
// } else {
//   alert('No tienes la edad permitida para conducir')
// }

// ME GUSTARIA VER SI SE PUEDE TIRAR DIFERENTES MENSAJES DEPENDIENDO DE LA EDAD QUE SE INGRESE

//   2)

// let nota
// do {
//   nota = parseInt(prompt('Ingresa una Nota del 0 a 10'))
  
//   if (!isNaN(nota) && nota >= 0 && nota <= 10) {
//     switch (nota) {
//       case 0:
//       case 1:
//       case 2:
//         alert('Muy deficiente')  
//         break;
//       case 3:
//       case 4:
//         alert('Insuficiente')
//         break;
//       case 5:
//       case 6: 
//         alert('Suficiente')
//         break;
//       case 7:
//         alert('Bien')
//         break;
//       case 8:
//       case 9:
//         alert('Muy bien')
//         break;
//       case 10:
//         alert('Excelente')
//         break;  
//     }
//   } else{
//     alert('Nota no valida')
//   }  
// } while (confirm('¿Desea continuar?'));

//   3)

// let cadena = ''
// do {
//   let palabra = prompt('Ingresa una palabra o frase')
//   if (cadena == '') {
//     cadena = palabra
//   } else {
//     cadena = cadena + '-' + palabra
//   }  
// } while ( confirm('¿Desea continuar ingresando palabras?'));
// document.write(cadena)

//   4)

// let suma = 0;
// let numero = 0;

// do {
//   numero = prompt('ingresa un numero');
//   console.log(numero)
//   if (!isNaN(numero) && numero !=null) {
//     suma = suma + parseInt(numero);
//     console.log(suma);
//   } else {
//           if (numero !=null) {
//             alert(numero + ' No es un numero');
//           }
//   }  
// } while (numero !=null);
// document.write(suma)

//   5)

// let resto = 0;
// let letra = '';

// do {
//   let numero = parseInt(prompt('Ingresa un numero de DNI'));
//   if (!isNaN(numero) && numero !=null) {
//     if (numero >= 0 && numero <= 99999999) {
//       resto = numero % 23
//       console.log(resto)

//       switch (resto) {
//         case 0:
//         letra = 'T'
          
//         break;
//         case 1:
//           letra = 'R'         
//         break;
//         case 2:
//           letra = 'W'          
//         break;
//         case 3:
//           letra = 'A'          
//         break;
//         case 4:
//           letra = 'G'          
//         break;
//         case 5:
//           letra = 'M'          
//         break;
//         case 6:
//           letra = 'Y'          
//         break;
//         case 7:
//           letra = 'F'         
//         break;
//         case 8:
//           letra = 'P'          
//         break;
//         case 9:
//           letra = 'D'          
//         break;
//         case 10:
//           letra = 'X'          
//         break;
//         case 11:
//           letra = 'B'          
//         break;
//         case 12:
//           letra = 'N'          
//         break;
//         case 13:
//           letra = 'J'          
//         break;
//         case 14:
//           letra = 'Z'          
//         break;
//         case 15:
//           letra = 'S'          
//         break;
//         case 16:
//           letra = 'Q'          
//         break;
//         case 17:
//           letra = 'V'          
//         break;
//         case 18:
//           letra = 'H'          
//         break;
//         case 19:
//           letra = 'L'          
//         break;
//         case 20:
//           letra = 'C'          
//         break;
//         case 21:
//           letra = 'K'          
//         break;
//         case 22:
//           letra = 'E'          
//         break; 
      
//         default:
//           alert('Numero erroneo')
//       }
//     }
//     alert('Numero: ' + numero + ', Letra: ' + letra)
//   }
// } while(confirm('¿Desea continuar?'));

//  6)

// for (let i = 1; i <= 30; i++) {
//   for (let rep = 0; rep < i; rep++) {
//     document.write(i)    
//   }
//   document.write('<br>')
// }

//  7)

// let numrep = parseInt(prompt('Ingrsa un numero de repeticiones (entre 1 y 50)'));
// if (!isNaN(numrep) && numrep !=null) {
//   if (numrep >= 1 && numrep <= 50) {
//     for (let i = numrep; i >= 1; i--) {
//       for (let rep = i; rep >= 1; rep--){
//         document.write(i)       
//       }
//       document.write('<br>')
//     }
//   } else {
//     alert('El numero introducidono no es valido')
//   }  
// } else {
//   alert('valor erroneo')
// }

//   8)

// let numrep = parseInt(prompt('Ingresa el  numero de repeticiones entre 1 y 50'));
// //verifica si se ingreso un numero
// if (!isNaN(numrep) && numrep!=null) {
//   if (numrep >= 1 && numrep <= 50) {
//     for (let i = 0; i <= numrep; i++) {
//       for (let rep = 1; rep <= i; rep++) {
//         document.write(rep);
//       }
//       document.write('<br>');
//     }
//   } else {
//     alert('el numero introducido no es valido')
//   }
// } else {
//   alert('valor erroneo')
// }


//    9)

// let j = 500;
// let rep = 0;

// for (let i = 1; i <= j; i++) {
//   document.write(i);  
//   if (i % 4 == 0) {
//     document.write(' (Multiplo de 4)');
//   }
//   if (i % 9 == 0 ) {
//     document.write(' (Multiplo de 9)');
//   }
//   document.write('<br>');
//   if (i % 5 == 0) {
//     document.write(' (Multiplo de 5)');
//   }
// }

//    10)


// let filas = parseInt(prompt('Ingrese un numero de filas'));
// let columnas = parseInt(prompt('Ingrese un numero de columnas'));
// let total = filas * columnas;

// document.write('<table border>');
// for (let indiceFila = 0; indiceFila < filas ; indiceFila++) {
//   document.write('<tr>'); 
//   for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
//     document.write('<td>' + total);
//     document.write('</td>');
//     total--;
//   }
//   document.write('</tr>');
// }
// document.write('</table>');

//     11)


// let firstName = prompt('Ingresa un nombre');
// let firstAge = parseInt(prompt('Ingresa una edad'));

// let secondName = prompt('Ingresa otro nombre');
// let secondAge = parseInt(prompt('Ingresa una segunda edad'));

// let thirdName = prompt('Ingresa un ultimo nombre');
// let thirdAge = parseInt(prompt('Ingresa una ultima edad'));


// //Función max() devuelve el mayor de los argumentos pasados.
// let maximo = Math.max(firstAge, secondAge, thirdAge);
// if (maximo == firstAge) {
//   document.write('El mayor es: ' + firstName);
// } else if (maximo == secondAge) {
//   document.write('El mayor es: ' + secondName);
// } else {
//   document.write('El mayor es: ' + thirdName);
// }

//    12)

// var numero = Math.floor((Math.random() * 99 + 1));
// document.write(numero);

//    13)

// let texto = prompt('Ingresa un texto');
// console.log(toUpperCase())
// texto = texto.toUpperCase()
// document.write(texto)
var result = 20;
result = result * 5; 
console.log(result)