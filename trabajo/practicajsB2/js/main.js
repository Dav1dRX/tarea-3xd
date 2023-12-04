//const Leer = require('prompt-sync')()
class Ejercicio1{
    //1. Dado a=3 y b=7, encuentra el valor de y = 2 * a + b - a mod 3.

    valory(){

        let num1 = 3;
        let num2 = 7;
        let y = 2 * num1 + num2 - num1 % 3;

        console.log("el valor de Y es: " , y );
        document.getElementById("resp").innerHTML = `el  valor de  y  es ${y}`
    }
//-------------------------------------------------------------------------------------------
//Si a=10 y b=4, calcula el valor de z = a * b + 3 mod a + b
 valorZ(){

    let a = 10;
    let b = 4 ;
    let z = a * b + 3 % a + b;

    console.log("el valor que toma Z es:", z);
    document.getElementById("resp").innerHTML =  `el  valor de  Z  es ${z}`



 }
//-------------------------------------------------------------------------------------------
//Con a=6 y b=2, determina el valor de w = a - b + 2 * a mod b.
valorw(){
    let a = 10;
    let b = 2; 
    let w = a - b + 2 * a % b;

    console.log("el valor de W es:",w);
    document.getElementById("resp").innerHTML = `el  valor de  W  es ${w}`
}
    
//-------------------------------------------------------------------------------------------

//Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.
valorv(){
    let a = 8;
    let b = 5; 
    let v  = 2 * b + a / 2 + 4 * b % a

    console.log("el valor de V es:", v );
    document.getElementById("resp").innerHTML = `el  valor de  V  es ${v}`




}
 //------------------------------------------------------------------------------------------- 
 //Si a=12 y b=9, calcula el valor de u = b - a + 3 * a mod b.
 valoru(){
    let a = 12;
    let b = 9 
    let u = b - a + 3 * a % b
    
    console.log("el valormde U es:", u )
   document.getElementById("resp").innerHTML = `el  valor de  U  es ${u}`
 }
 //------------------------------------------------------------------------------------------- 

 //6. (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3

 mayorQUE(){

    let a = (5 + 3 * 2) + 9;
    let b =  3 * 5 * 14 % 3;

    if(a > b){
        console.log("(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3 es VERDAREDO")
        document.getElementById("resp").innerHTML = `${a} si es mayor de ${b}`
    }else{
        document.getElementById("resp").innerHTML = `${a} no es mayor de ${b}`
    }

}
 //------------------------------------------------------------------------------------------- 
 //7.   2 *(4 – 10 + 8)/2* 36 *(1/2
 valorfinal(){
    let f = 2 *(4 - 10 + 8)/2* 36 *(1/2)

    console.log("2 *(4 - 10 + 8)/2* 36 *(1/2) = ", f )
    document.getElementById("resp").innerHTML = `El resultado de la expresion es: ${f}`
 }
 //-----------------------------------------------------------------------------------------

 //8.   760 / 12 + 54 % 3 – 85 % 7
 valorfinal2(){
let sepsi = 760 / 12 + 54 % 3 - 85 % 7
  console.log("760 / 12 + 54 % 3 - 85 % 7  = ", sepsi)
  document.getElementById("resp").innerHTML = `El resultado de la expresion es: ${sepsi}`
 }
 //-------------------------------------------------------------------------------------------
 //9.    (48 < 2 * 3) | | (48 < 2 * 3)
 mayorquex2(){
    let a =  48 < 2 * 3;
    let b =  48 < 2 * 3;
    
    if (a || b ){
        console.log("(48 < 2 * 3) | | (2 * 7 < 12) es verdadera");
        document.getElementById("resp").innerHTML = `la expresion A y la expresion B son verdaderas `;
    }else{
        console.log("(48 < 2 * 3) | | (2 * 7 < 12) es falso");
        document.getElementById("resp").innerHTML = `la expresion A y la expresion B son falsas `;
   }
 }
  //------------------------------------------------------------------------------------------- 
  //10.        ((8 > 2) | | (932 < 23) ) && 4 == 2
  maryorqueraro(){
    let a = 8 > 2
    let b = 932 < 23
    let c = 4 == 2

    if (a || b || c ){
        console.log("((8 > 2) | | (932 < 23) ) && 4 == 2 es verdadera");
        document.getElementById("resp").innerHTML = `las expresiones A = ${a} ,B = ${b} y c ${c} , esto es igual a VERDADERO `
    }else{
        console.log("((8 > 2) | | (932 < 23) ) && 4 == 2 es falsa");
        document.getElementById("resp").innerHTML = `las expresiones A = ${a} ,B = ${b} y c = ${c} esto es igual a FALSO `
    }
  }
//------------------------------------------------------------------------------------------- 

    //11.    Suma de dos números: Escribe un programa que tome dos números como 
    //entrada y muestre su suma.

    suma(){
        let numero1 = 0 ;
        let numero2 = 0 ;

        numero1 = parseInt(document.getElementById("numero1").value);
        numero2 = parseInt(document.getElementById("numero2").value);

        let resul = numero1 + numero2 ;

        console.log(resul);
        document.getElementById("resp").innerHTML = `respuesta : ${resul}`;


    }
//------------------------------------------------------------------------------------------- 
//12.   Área de un triángulo: Pide al usuario que ingrese la base y la altura de un triángulo, 
//      luego calcula y muestra su área

triangulo(){
    let base = 0
    let altura = 0 
    

    base = parseInt(document.getElementById("base").value);
    altura = parseInt(document.getElementById("altura").value);

    let area = base * altura / 2
    console.log(area);
    document.getElementById("resp").innerHTML = `respuesta : ${area}`;


}
//------------------------------------------------------------------------------------------- 
//13.   Número par o impar: Solicita al usuario que ingrese un número e indica si es 
//  par o impar.

parimpar(){

    let numsepsi = 0 

    numsepsi = parseInt(document.getElementById("numsepsi").value);

    if(numsepsi % 2 == 0 ){
        console.log(numsepsi,"el es un numero par")
        document.getElementById("resp").innerHTML = `${numsepsi} , es un numero par`;
    }else{
        console.log(numsepsi,"el es un numero impar")
        document.getElementById("resp").innerHTML = `${numsepsi} , es un numero impar`;
    }
}
//------------------------------------------------------------------------------------------- 

//14.  Calculadora simple: Crea una calculadora que realice operaciones básicas 
   //como suma, resta, multiplicación y división, según la elección del usuario.
   calculadora(){
    let num1 = 0 
    let num2 = 0
    let operador = ""

    num1 = parseInt(document.getElementById("num1").value);
    operador = document.getElementById("operador").value; 
    num2 = parseInt(document.getElementById("num2").value);
    

    if(operador === "+"){
        let respu = num1 + num2
        console.log(num1 , "+" , num2 , "=" , respu);
        document.getElementById("resp").innerHTML = `resultado = ${respu} `;

    }else if (operador === "-"){
        let respu = num1 - num2
        console.log(num1 , "-" , num2 , "=" , respu);
        document.getElementById("resp").innerHTML = `resultado = ${respu} `;

    }else if (operador === "*"){
        let respu = num1 * num2
        console.log(num1 , "*" , num2 , "=" , respu);
        document.getElementById("resp").innerHTML = `resultado = ${respu} `;

    }else if (operador === "/"){
        let respu = num1 / num2
        console.log(num1 , "/" , num2 , "=" , respu);
        document.getElementById("resp").innerHTML = `resultado = ${respu} `;
    }else{
        console.log("ERROR EN OPERACION");
        document.getElementById("resp").innerHTML = `Ingrese el operados correcto`;

    }
}
//------------------------------------------------------------------------------------------- 
//Tabla de multiplicar: Pide al usuario un número y muestra su tabla de 
//multiplicar del 1 al 10.

tablaMultiplicar(){
    let vi, vf, tabla, resp, contador;
    vi = 0; vf = 0; tabla = 0; resp = 0;

    vi = parseInt(document.getElementById("desde").value)
    vf = parseInt(document.getElementById("hasta").value)
    tabla = parseInt(document.getElementById("tabla").value)

    if (vi < 1 || vi > 10 || vf < 2 || vf > 10 || tabla < 1 || tabla > 100) {
        console.log("Valores fuera del rango permitido.");
        document.getElementById("resp").innerHTML = "Valores fuera del rango permitido.";
        return;
    }




    contador = vi;
    document.getElementById("resp").innerHTML=`Tabla del ${tabla}`
    while (contador <= vf) {
        resp = contador * tabla;
        console.log(`${contador} * ${tabla} = ${resp}`)
        document.getElementById("resp").innerHTML += `<br>${contador} * ${tabla} = ${resp} `
        contador= contador+1
        
    }
}
 //------------------------------------------------------------------------------------------- 
 
 //16. Copiar palabra: Escribe un programa que lea dos palabras y concatena en otra 
 //variable las dos palabras
 palabra(){

    let palabra1 = ""
    let palabra2 = ""

    palabra1 = (document.getElementById("palabra1").value)
    palabra2 = (document.getElementById("palabra2").value)

    let conca = palabra1 + palabra2

    console.log("la union de las palabras es:",conca)
    document.getElementById("resp").innerHTML = `${conca} `
 }






  //------------------------------------------------------------------------------------------- 
//17. Solicita al usuario escribir tres números y determina cuál es el mayor de ellos
mayordetres() {
    let num1 = 0; let num2 = 0; let num3 = 0; let mayor = 0
    num1 = (document.getElementById("num1").value)
    num2 = (document.getElementById("num2").value)
    num3 = (document.getElementById("num3").value)
    if (num1 >= num2 && num1 >= num3){
        console.log("el num1 es mayor")
         mayor = num1
    } else if (num2 >= num1 && num2 >= num3){
        console.log("el num2 es mayor")
        mayor = num2
            
    } else if (num3 >= num1 && num3 >= num2) {
        console.log("el num3 es mayor")
         mayor = num3
        

    }
    document.getElementById("resp").innerHTML = `el numero mayor es ${mayor}`
}

//.............................................................................................

//18. realizar un programa que calcule si alguien tiene edad para votar

edadpavotar() {
    let edad = 0 
    edad = (document.getElementById("edad").value)
if (edad >= 18){document.getElementById("resp").innerHTML = `Tu edad es : ${edad} felicidades, ya puedes votar`}
else {document.getElementById("resp").innerHTML = `Tu edad es : ${edad}<br>no puedes votar`}

}
//................................................................................................

//19. Crea un programa que calcule el índice de masa corporal (BMI) a partir del peso y la altura del usuario,
// y luego indique si está en una categoría de peso saludable.

pesosaludable(){
        let peso ;
        let estatura ;
        let estado = "";
    
        peso = parseFloat(document.getElementById("peso").value);
        estatura = parseFloat(document.getElementById("estatura").value);
    
        let bmi = peso / (estatura * estatura);
    
        if (bmi < 18.5) {
            estado = "inferior al normal";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            estado = "normal";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            estado = "superior al normal";
        } else {
            estado = "sobrepeso";
        }
    
        document.getElementById("resp").innerHTML = `Tu BMI es: ${bmi.toFixed(2)}, ${estado}`;
    }






//20. Número positivo, negativo o cero: Pide al usuario que ingrese un número y 
    //muestra si es positivo, negativo o cero
    numerorr(){
        let num1 = parseInt(document.getElementById("num1").value)
    
    if (isNaN(num1)) {
      console.log("Por favor, ingresa un número válido.");
      document.getElementById("resp").innerHTML = `ingresa un número válido`
    } else {
      if (num1 > 0) {
        console.log("El número es positivo.");
        document.getElementById("resp").innerHTML = `El número es positivo.`
      } else if (num1 < 0) {
        console.log("El número es negativo.");
        document.getElementById("resp").innerHTML = `El número es negativo.`
      } else {
        console.log("El número es cero.");
        document.getElementById("resp").innerHTML = `El número es cero.`
      } 
    }
    
    }
    //-------------------------------------------------------------------------------------------
  //21. Año bisiesto: Solicita al usuario un año y determina si es un año bisiesto o no. 
//Un año bisiesto es divisible por 4, pero no por 100, a menos que también sea 
//divisible por 400.
añooo(){


let año = parseInt(document.getElementById("año").value)

if (isNaN(año)) {
  console.log("Por favor, ingresa un año válido.");
  document.getElementById("resp").innerHTML =  `Por favor, ingresa un año válido.`
} else {
  if ((año % 4 === 0 && anio % 100 !== 0) || (año % 400 === 0)) {
    console.log(anio + " es un año bisiesto.");

    document.getElementById("resp").innerHTML = `es un año bisiesto.`
  } else {
    console.log(año + " no es un año bisiesto.");
    document.getElementById("resp").innerHTML =  `no es un año bisiesto.`
  }
}
}
//------------------------------------------------------------------------------------------- 
//22. Signo zodiacal: Pide al usuario que ingrese su mes y día de nacimiento, luego 
//determina su signo zodiacal. Puedes usar una serie de declaraciones if para 
//comparar las fechas ingresadas con las fechas límite de cada signo zodiacal.
clowncosmico(){
    let mes= parseInt(document.getElementById("mes").value)//("Ingresa el número de tu mes de nacimiento (1-12):"));
    let dia= parseInt(document.getElementById("dia").value)//("Ingresa el día de tu nacimiento:"));

if (isNaN(mes) || isNaN(dia) || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
  console.log("Por favor, ingresa una fecha de nacimiento válida.");
} else {
  let signo = "";

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
    signo = "Aries";
  } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
    signo = "Tauro";
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    signo = "Géminis";
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    signo = "Cáncer";
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    signo = "Leo";
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    signo = "Virgo";
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    signo = "Libra";
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    signo = "Escorpio";
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    signo = "Sagitario";
  } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
    signo = "Capricornio";
  } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
    signo = "Acuario";
  } else {
    signo = "Piscis";
  }

  document.getElementById("resp").innerHTML =  `Tu signo zodiacal es ${signo} .`

}

}
//------------------------------------------------------------------------------------------- 

//23. Día del mes con respecto a la segunda quincena: Solicita al usuario que ingrese 
//un número de día del mes (por ejemplo, del 1 al 31) y verifica si ese día 
//pertenece a la primera quincena (días 1-15) o a la segunda quincena (días 16-
//31)
quincena(){
    let dia= parseInt(document.getElementById("dia").value)//("Ingresa un número de día del mes (1-31):"));

if (isNaN(dia) || dia < 1 || dia > 31) {
  console.log("Por favor, ingresa un número de día válido.");
  document.getElementById("resp").innerHTML =  `Por favor, ingresa un número de día válido.`
} else {
  if (dia >= 1 && dia <= 15) {
    console.log("El día " + dia + "pertenece a la primera quincena.");
    document.getElementById("resp").innerHTML =  `pertenece a la primera quincena.`
  } else {
    console.log("El día " + dia + " pertenece a la segunda quincena.");
    document.getElementById("resp").innerHTML =  `pertenece a la segunda quincena.`
  }
}

}
//------------------------------------------------------------------------------------------- 
//24. Día de la semana: Pide al usuario que ingrese un número del 1 al 7, donde 1 
//representa el domingo, 2 el lunes, 3 el martes, y así sucesivamente. Luego, 
//utiliza una estructura switch para mostrar el nombre del día de la semana 
//correspondiente al número ingresado.

diasepsi() {
    let numeroDia = parseInt(document.getElementById("numeroDia").value);
    let nombreDia;
  
    if (isNaN(numeroDia) || numeroDia < 1 || numeroDia > 7) {
      console.log("Por favor, ingresa un número válido del 1 al 7.");
      alert("Por favor, ingresa un número válido del 1 al 7.")
    } else {
      switch (numeroDia) {
        case 1:
          nombreDia = "Domingo";
          break;
        case 2:
          nombreDia = "Lunes";
          break;
        case 3:
          nombreDia = "Martes";
          break;
        case 4:
          nombreDia = "Miércoles";
          break;
        case 5:
          nombreDia = "Jueves";
          break;
        case 6:
          nombreDia = "Viernes";
          break;
        case 7:
          nombreDia = "Sábado";
          break;
      }
  
      console.log("El día correspondiente al número " + numeroDia + " es " + nombreDia + ".");
    }
  
    document.getElementById("resp").innerHTML = `El día correspondiente al número ${numeroDia} es ${nombreDia}.`;
  }
  //------------------------------------------------------------------------------------------- 
// 25. Frases iguales: Escribir un programa que ingrese dos frases e indique si son 
//iguales 

frasesame(){
    
    let frase1 = document.getElementById("frase1").value;
    let frase2 = document.getElementById("frase2").value;

if (frase1.trim().toLowerCase() === frase2.trim().toLowerCase()) {
  console.log("Las frases son iguales.");
  document.getElementById("resp").innerHTML =  `Las frases son iguales.`
} else {
  console.log("Las frases no son iguales.");
  document.getElementById("resp").innerHTML =  `Las frases no son iguales.`
}


}
  //------------------------------------------------------------------------------------------- 
  //26. Calculadora de precio con descuento: Crea un programa que permita a un 
//usuario ingresar el precio de un artículo y un porcentaje de descuento. El 
//programa debe calcular y mostrar el precio final después del descuento.
descuentobb() {
    let precioOriginal = parseFloat(document.getElementById("precioOriginal").value);
    let porcentajeDescuento = parseFloat(document.getElementById("porcentajeDescuento").value);
  
    if (isNaN(precioOriginal) || isNaN(porcentajeDescuento)) {
      console.log("Por favor, ingresa valores numéricos válidos.");
    } else {
      if (precioOriginal >= 0 && porcentajeDescuento >= 0 && porcentajeDescuento <= 100) {
        let descuento = (precioOriginal * porcentajeDescuento) / 100;
        let precioFinal = precioOriginal - descuento;
  
        console.log("Precio original: $" + precioOriginal.toFixed(2));
        console.log("Descuento aplicado: $" + descuento.toFixed(2));
        console.log("Precio final después del descuento: $" + precioFinal.toFixed(2));
  
        document.getElementById("resp").innerHTML = `Precio original: $${precioOriginal.toFixed(2)}<br>Descuento aplicado: $${descuento.toFixed(2)} <br> Precio final con descuento: $ ${precioFinal.toFixed(2)}`;
      } else {
        console.log("Ingresa valores válidos para el precio y el porcentaje de descuento.");
      }
    }
  }
//-------------------------------------------------------------------------------------------
//27. Calculadora de factura con impuestos: Pide al usuario que ingrese el total de su factura
//y el porcentaje de impuestos aplicado. Luego, calcula y muestra el nuevo salario despues del aumento
calculadoraimp(){
    let totalimp=0
    let sumatotal=0
    let num = parseInt(document.getElementById("num").value)
    let imp = parseInt(document.getElementById("imp").value)
    totalimp= num * imp / 100
    sumatotal= num + totalimp
    console.log("Su impuesto es de ", totalimp)
    console.log("Su monto total a pagar es de ", sumatotal)
    document.getElementById("resp").innerHTML = `Su monto total a pagar es de : ${sumatotal}<br>Su impuesto es de : ${totalimp}`;

}

//28.Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario
//actual y el porcentaje de aumento que recibirá. Calcula y muestra el nuevo
//salario después del aumento.
calaumento(){
let salarioaum=0
let nuevosalario=0
let salario= parseInt(document.getElementById("salario").value)
let aumento= parseInt(document.getElementById("aumento").value)
salarioaum= salario * aumento / 100
nuevosalario= salario + salarioaum
    console.log("l aumento que recibirá es de:", salarioaum)
    console.log("Su nuevo salario será de:", nuevosalario)
    document.getElementById("resp").innerHTML = `Su monto total a pagar es de : ${nuevosalario}<br>El aumento que recibirá es de : ${salarioaum}`;

}

//29.Calculadora de compra con múltiples artículos: Permite al usuario ingresar el
//precio y la cantidad de varios artículos que está comprando. Calcula el total de
//la compra y aplica un descuento del 10% si el total es mayor a cierta cantidad
//(por ejemplo, $100).
calculadoraarti(){
let total=0
let descuento=0
let totaldesc=0
let precio= parseInt(document.getElementById("precio").value)
let cantidad= parseInt(document.getElementById("cantidad").value)
total=precio*cantidad
if (total >= 100){
    descuento=total*10/100
    totaldesc=total-descuento
    document.getElementById("resp").innerHTML = `Su descuento es de : ${descuento}<br>Su total a pagar es de : ${totaldesc}`;

}else{
    document.getElementById("resp").innerHTML = `Su total a pagar es de : ${total}<br>No habrá descuento`;
}
}

//30-31-32.Calculadora de impuestos sobre el salario: Solicita al usuario que ingrese su
//salario anual y calcula el impuesto sobre la renta según las siguientes tasas:
//Hasta De $10,001 a $20,000: 1 $10,000: 5% 0%
//Más de $20,000: 15%
calculadorasalanu(){
let impuesto=0
let total=0
let salarioanu=parseInt(document.getElementById("salarioanu").value)
if (salarioanu <= 10000){
    impuesto=salarioanu*5/100
    total=salarioanu+impuesto
    document.getElementById("resp").innerHTML = `Su impuesto es de : ${impuesto}<br>Su total a pagar es de : ${total}`;
}else if(salarioanu >= 10001 && salarioanu <= 20000){
    impuesto=salarioanu*10/100
    total=salarioanu+impuesto
    document.getElementById("resp").innerHTML = `Su impuesto es de : ${impuesto}<br>Su total a pagar es de : ${total}`;
}else if(salarioanu > 20000){
    impuesto=salarioanu*15/100
    total=salarioanu+impuesto
    document.getElementById("resp").innerHTML = `Su impuesto es de : ${impuesto}<br>Su total a pagar es de : ${total}`;
}
}

//33.Descuento por antigüedad en la empresa: Pregunta al usuario cuántos años ha
//estado trabajando en una empresa y calcula su bono de antigüedad. Si ha
//trabajado más de 5 años, otorga un bono del 5% sobre su salario.
descuantiguedad(){
let bono=0
let total=0
let totalsalario=0
let años=parseInt(document.getElementById("años").value)
let salario= parseInt(document.getElementById("salario").value)
if (años > 5){
bono=5
total=salario*bono/100
totalsalario=salario+total
document.getElementById("resp").innerHTML = `Se le a otorgado un bono de 5% y es de: ${total}<br>Su sueldo total sería de : ${totalsalario}`;
}else{
    document.getElementById("resp").innerHTML = `Su salario es el mismo: ${impuesto}`;
}
} 
//-------------------------------------------------------------------------------------------




//34. Calculadora de envío con tarifas diferentes: Crea un programa que permita al
//usuario ingresar la distancia de envío y calcule el costo del envío. Si la distancia
//es inferior a 50 km, el costo es de $10. Si la distancia es de 50 km o más, el
//costo es de $20.

envio() {
    let costokilometro = 0;
    let envioKilometro = parseInt(document.getElementById("envioKilometro").value);

    if (envioKilometro <= 50) {
        costokilometro = 10;
    } else {
        costokilometro = 20;
    }

    document.getElementById("resp").innerHTML = `Tu distancia es ${envioKilometro} KM <br> El costo del envío es: ${costokilometro}$;`;
}

    
//---------------------------------------------------------------------------------------------------------------------------------------

//35 Calculadora de descuento por lealtad del cliente: Pide al usuario que ingrese el
//total de sus compras mensuales durante un año. Si el total es superior a $500,
//aplica un descuento del 10% en la próxima compra.
 Descuentolealtad() {
    let totalCompra = parseInt(document.getElementById("totalCompra").value);
    
    let porcentajeDescuento = 10; // Porcentaje de descuento fijo

    let descuento = 0;

    if (totalCompra > 500) {
        descuento = totalCompra * (porcentajeDescuento / 100);
        
        document.getElementById("resp").innerHTML = `En su próxima compra tendrá un descuento del ${porcentajeDescuento}%: $${descuento.toFixed(2)}. ¡Gracias por su lealtad!`;
    } else {
        document.getElementById("resp").innerHTML = `No califica para un descuento en su próxima compra. ¡Gracias por su preferencia!`;
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------
//36. Calculadora de descuento por volumen de compra: Permite al usuario ingresar
//la cantidad de unidades de un producto que va a comprar y el precio unitario.
//Aplica descuentos por volumen de compra según las siguientes reglas:
//37. 10-50 unidades: 5% de descuento
//38. 51-100 unidades: 10% de descuento
//39. Más de 100 unidades: 15% de descuento
volumenCompras() {
    let unidades = parseInt(document.getElementById("unidades").value);
    let costoUnidad = parseInt(document.getElementById("costoUnidad").value);

    let porcentaje1 = 5;
    let porcentaje2 = 10;
    let porcentaje3 = 15;
    let total = 0;

    let descuento = 0;

    if (unidades >= 10 && unidades <= 50) {
        total = unidades * costoUnidad;
        descuento = total * (porcentaje1 / 100);
        document.getElementById("resp").innerHTML = `unidades: ${unidades} <br> total: ${total}<br> descuento: ${porcentaje1}% <br> Precio final: ${descuento.toFixed(2)}$`;

    } else if (unidades > 50 && unidades <= 100) {
        total = unidades * costoUnidad;
        descuento = total * (porcentaje2 / 100);
        document.getElementById("resp").innerHTML = `unidades: ${unidades} <br> total: ${total}<br> descuento: ${porcentaje2}% <br> Precio final: ${descuento.toFixed(2)}$`;

    } else if (unidades > 100) {
        total = unidades * costoUnidad;
        descuento = total * (porcentaje3 / 100);
        document.getElementById("resp").innerHTML = `unidades: ${unidades} <br> total: ${total}<br> descuento: ${porcentaje3}% <br> Precio final: ${descuento.toFixed(2)}$`;
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------------
//costoHora, horaServicio, descuento, porcentaje
//40. Calculadora de costo de servicio: Pregunta al usuario cuántas horas de servicio
//necesita y calcula el costo total. Si las horas son más de 10, aplica un
//descuento del 20%
HorasdeServicio() {
    let costoHora = parseInt(document.getElementById("costoHora").value);
    let horaServicio = parseInt(document.getElementById("horaServicio").value);
    let total = 0;
    let porcentaje = 20;
    let descuento = 0;

    if (horaServicio > 10) {
        total = costoHora * horaServicio;
        descuento = total * (porcentaje / 100);
        let precioFinal = total - descuento;

        document.getElementById("resp").innerHTML = `Horas de servicio: ${horaServicio} <br>
        Costo por hora: $${costoHora} <br>
        Descuento: ${porcentaje}% <br>
        Precio final: $${precioFinal.toFixed(2)}`;
    }
}













//------------------------------------------------------------------------------------------- 
//CICLOS O BUCLES

//41. Suma de números pares: Utiliza un bucle for para calcular la suma de los 
//números pares del 1 al 50

serie1al50(){

    let suma = 0 

    for(let i = 0 ; i <= 50 ; i++){
        console.log(i)

       if(i % 2 === 0 ){
         suma += i;
        
        document.getElementById("resp").innerHTML = `las suma de los numeros par es ${suma}`;
       }
    }
}
//------------------------------------------------------------------------------------------- 
//Tabla de multiplicar: Utiliza un bucle for para imprimir la tabla de multiplicar de 
 //un número ingresado por el usuario del 1 al 12
 tablaxd(){
    let num1 = 0;

    num1 = parseInt(document.getElementById("num1").value);

    document.getElementById("resp").innerHTML = ""

    for(let i = 1; i<=12;i++){
        let respu = i * num1;

        document.getElementById("resp").innerHTML += `<br>${num1} * ${i} = ${respu}`;

    }
 }
//------------------------------------------------------------------------------------------- 
//43. Contador de vocales: Utiliza un bucle while para contar el número de vocales en una 
//palabra ingresada por el usuario.
vocales(){

    let vocal = "aeiouAEIOU";
    let conta = 0 ;
    let frase = "";
    let i = 0;
    

    frase = (document.getElementById("frase").value);

    while (i < frase.length){
        if(vocal.indexOf(frase[i]) !== -1){
            console.log("vocales", frase[i]);
            conta += 1;
           
        }  
        i++;
    }
    document.getElementById("resp").innerHTML = `cantidad de vocales:${conta} `;
}

//------------------------------------------------------------------------------------------- 
//44. Contador de digitos: Utiliza un bucle for para contar el numero de dígitos en 
//una palabra ingresada por el usuario.
digitos(){
    let contador = 0

    let frase = ""

    frase = (document.getElementById("frase").value)

    for(let i = 0; i < frase.length; i++){
        let carac = frase.charAt(i);
        if (!isNaN(carac) && carac !== " "){
            contador += 1;
            
        }
    }
    document.getElementById("resp").innerHTML = `la palabra la frase tiene ${contador}`
}
//------------------------------------------------------------------------------------------- 


//45. Adivina el número: Genera un número aleatorio y pide al usuario que adivine el 
//número. Utiliza un bucle while para repetir la solicitud hasta que adivine 
//correctamente.

  
juegosepsi() {
    
    let intentos = 10;
    let num = "";
    let mensajes = "";
    let numeroR = Math.floor(Math.random() * 10 + 1);

 
  
    while (num !== numeroR) {
      num = parseInt(document.getElementById("num").value);
      console.log (numeroR)
  
      if (num === numeroR) {
        mensajes += `Número encontrado ${num} con ${intentos} intentos de sobra`;
        break;
      } else if (num > numeroR) {
        mensajes += "El número es muy alto, ingresa otro <br>";
      } else if (num < numeroR) {
        mensajes += "El número es muy bajo, ingresa otro <br>";
      }
      intentos--;
    }
  
    if (intentos === 0) {
      alert("PERDISTE 😓 reinicia el juego");
    }
  
    document.getElementById("resp").innerHTML += `<br> ${mensajes}`;
  }
  //------------------------------------------------------------------------------------------- 
  //46. Contador de Alfabeto: Utiliza un bucle for para contar el número de letras del 
 ///alfabeto(a..z) en una palabra ingresada por el usuario.

  alfaaz(){

    let contador = 0 
    let palabra = " "

    palabra = (document.getElementById("palabra").value)
    console.log (palabra)

    for ( let i = 0; i < palabra.length; i ++){
        let caract = palabra.charAt(i);
        if (caract >= 'a' && caract <= 'z'){
            contador ++;

        }

        }
        document.getElementById("resp").innerHTML = `${palabra} tiene ${contador} letras`;
    }
    //------------------------------------------------------------------------------------------- 
    // 47. Suma de números impares: Utiliza un bucle while para calcular la suma de los 
     //números impares del 1 al 100.

     del1al100(){
        let contador = 0
        let suma = 0 
        let i = 0

        while(i <= 100){
            if (i % 2 !== 0){
                console.log(i)
                suma += i
            }
            document.getElementById("resp").innerHTML =   `${suma}`;
            i++;
        }



     }
//------------------------------------------------------------------------------------------- 
 //Contador de caracteres: Escribir un programa que lea una palabra y presenta 
 //cuantos caracteres hay en dicha palabra.

 numcaracte(){
    let contador = 0
    let palabrota = " " 

    palabrota = (document.getElementById("palabrota").value)
    console.log(palabrota)

    for(let i = 0 ; i < palabrota.length; i++){
        console.log(i + 1)
        document.getElementById("resp").innerHTML = `${palabrota} tiene ${i} caracteres.`;
    }
    
 }
//------------------------------------------------------------------------------------------- 
 //49.     Suma de números: Pide al usuario que ingrese números enteros positivos uno 
//por uno y utiliza un bucle while para calcular la suma de estos números. El ciclo 
//debe terminar cuando el usuario ingrese un número negativo.
sumainfinita(){

    let suma  = 0 
    let num = parseInt(document.getElementById("num").value)
    
    while(num >= 0){
        let num = parseInt(prompt("dame numeros sin parar [ingresa numero negativo para parar]"))
        
        if ( num >= 0){
            suma +=  num;
            console.log(suma)
    
        }else{
            break;
        }
       
    }

    document.getElementById("resp").innerHTML = `suma total${suma}`;

}

//------------------------------------------------------------------------------------------- 
//50. Cuenta regresiva: Pide al usuario que ingrese un número entero positivo y utiliza 
//un bucle while para mostrar una cuenta regresiva desde ese número hasta 1

paraAtras(){

    let num = 0
    let respuu = ""

   

    num = parseInt(document.getElementById("num").value)

    while (num > 0 ){
        respuu += `${num} - `;


        num--;
    }
    document.getElementById("resp").innerHTML = `${respuu}`
  

}
//------------------------------------arreglos------------------------------------------------------- 
//51. Suma de elementos: Crea un arreglo de números enteros y calcula la suma de todos sus 
//elementos.

arreglo1(){
    

    let nums = [25 ,57 ,12 , 42 ,53 ,35,2];
    let suma = 0 
    for ( let i = 0 ; i < nums.length; i++){
        suma += nums[i]
    }
    document.getElementById("resp").innerHTML =`${suma}`


}
//------------------------------------------------------------------------------------------- 
//52. Promedio de calificaciones: Crea un arreglo de calificaciones (números decimales) y 
//calcula el promedio de las calificaciones.

calificaciones() {
    let inputCalificaciones = document.getElementById("notas").value;

    
    if (inputCalificaciones.trim() === "") {
        document.getElementById("resp").innerHTML = "Por favor, ingresa calificaciones.";
        return;
    }

    
    let calificacionesArray = inputCalificaciones.split(',').map(parseFloat);

    // Verificar si alguna calificación no es un número
    if (calificacionesArray.some(isNaN)) {
        document.getElementById("resp").innerHTML = "Por favor, ingresa calificaciones válidas.";
        return;
    }

    // Verificar si hay al menos una calificación
    if (calificacionesArray.length === 0) {
        document.getElementById("resp").innerHTML = "Por favor, ingresa al menos una calificación.";
        return;
    }

    // Calcular el promedio
    let suma = calificacionesArray.reduce((total, calificacion) => total + calificacion, 0);
    let promedio = suma / calificacionesArray.length;

    // Mostrar el resultado
    document.getElementById("resp").innerHTML = `Calificaciones ingresadas: [${calificacionesArray.join(', ')}]<br>El promedio es: ${promedio.toFixed(2)}`;
}

 //------------------------------------------------------------------------------------------- 

 //53. Mayor y menor valor: Encuentra el valor máximo y mínimo en un arreglo de números 
 //enteros.
 mayomenor(){
    let entradadenumeros = document.getElementById("numeros").value;


    if(entradadenumeros.trim() === "" ){
        alert("el campo esta vacio")
        return;
    }

    let numeroarreglo = entradadenumeros.split(',').map(parseFloat);

    if (numeroarreglo.some(isNaN)){
        alert("Ingrese los valores correctos")
        return;
    }

    if(numeroarreglo.length === 0 ){
        alert("ingrese al menos 2 digitos")
        return;
    }

    let maximo = numeroarreglo[0];
    let minimo = numeroarreglo[0];

    for(let i = 1; i <numeroarreglo.length; i++){

    if(numeroarreglo[i] > maximo){
        maximo = numeroarreglo[i];
    }

    if (numeroarreglo[i] < minimo){
        minimo = numeroarreglo[i];
    }

    }

    document.getElementById("resp").innerHTML = `El valor máximo es: ${maximo}, y el valor mínimo es: ${minimo}.`;

 }
   //------------------------------------------------------------------------------------------- 
  //54. Buscar un elemento: Pide al usuario que ingrese un número y verifica si ese número está 
   //presente en un arreglo dado.
   busqueda(){
    let arreglo1 = [29,5,8,2,7,2,6,24]
    let entrada = parseInt(document.getElementById("numeros").value);

    for(let i = 0 ; i < arreglo1.length; i++){
        if(entrada === arreglo1[i]){ 
            document.getElementById("resp").innerHTML = `en numero ${entrada} si esta en el arreglo <br> ${arreglo1}`
            return;
        }
    }
    document.getElementById("resp").innerHTML = `El número ${entrada} no está en el arreglo: [${arreglo1}]`;
    alert("Valores del arreglo: [29, 5, 8, 2, 7, 2, 6, 24]");
   }

     //------------------------------------------------------------------------------------------- 
     //Inversión de un arreglo: Invierte el orden de los elementos en un arreglo. Por ejemplo, 
    //[1, 2, 3] se convierte en [3, 2, 1].
    paraatrasbb(){

        let nuevoarreglo = []

        let entradadenumeros = document.getElementById("numeros").value;


    if(entradadenumeros.trim() === "" ){
        alert("el campo esta vacio")
        return;
    }

    let numeroarreglo = entradadenumeros.split(',').map(parseFloat);

    if (numeroarreglo.some(isNaN)){
        alert("Ingrese los valores correctos, tiene que ser numericos")
        return;
    }

    if(numeroarreglo.length === 0 ){
        alert("ingrese al menos 2 digitos")
        return;
    }

    for(let i = numeroarreglo.length -1; i >= 0; i--){
        nuevoarreglo.push(numeroarreglo[i]);

      

    }
    document.getElementById("resp").innerHTML = `el arreglo al reves es: [${nuevoarreglo}]`;
    

    }
//------------------------------------------------------------------------------------------- 

//57. Buscar el índice: Pide al usuario que ingrese un valor y encuentra el índice de ese valor 
//en un arreglo. Si el valor aparece más de una vez, muestra todos los índices.
indice(){

    let bingo = []
    let indice = [3,5,6,3,7,8,7,12,17,19];
    let numero = parseInt(document.getElementById("numeros").value);


    for(let i = 0; i < indice.length;i++){
        if(numero === indice[i]){
            bingo.push(i);

        
        }
    
    }

    if (bingo.length > 0 ){
        document.getElementById("resp").innerHTML = `el numero ${numero} en las posiciones ${bingo.join(" y ")}`;
    }else{
        alert("numero no encontrado en [3,5,6,3,7,8,7,12,17,19]");
    }

}

//------------------------------------FUNSIONES------------------------------------------------------- 
saludo(){
    function saludar(){
        console.log("hola profe😘");
        return "hola profe😘";
    }

  document.getElementById("resp").innerHTML = saludar();
}

//------------------------------------------------------------------------------------------- 

//59. Función con parámetros para sumar dos números.
function2(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    function suma(num1 , num2){
        let resultado = num1 + num2;
        return resultado;
    }

    document.getElementById("resp").innerHTML = suma(num1 , num2)
}
//------------------------------------------------------------------------------------------- 
//60. Función con return para multiplicar dos números.

function3(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
//pero si es lo mismo que el ejercicio anterior 
    function multiplicaaar(num1 , num2){
        let resultado = num1 * num2;
        return resultado;
    }

    document.getElementById("resp").innerHTML = multiplicaaar(num1 , num2);
}
//------------------------------------------------------------------------------------------- 
//61. Función sin return para determinar si un número es par o impar.

function4(){
    let num = parseInt(document.getElementById("num").value);

    function area(num){
        if (num % 2 === 0){
            return "El número ingresado es par";
        } else {
            return "El número no es par";
        }
    }

    document.getElementById("resp").innerHTML = area(num)
}
//-------------------------------------------------------------------------------------------
//62. Función con parámetros y return para calcular el área de un rectángulo.
function5(){
    let base = parseInt(document.getElementById("base").value);
    let altura = parseInt(document.getElementById("altura").value);
//pero si es lo mismo que el ejercicio anterior 
    function area(base , altura){
        let resultado = base * altura;
        return resultado;
    }

    document.getElementById("resp").innerHTML = area(base , altura);
}

//------------------------------------------------------------------------------------------- 
//63. Función sin parámetros para imprimir tu nombre
saludo23(){
    function saludar23(){
        console.log("✞☠︎ℕ𝕖𝕠𝕟ℙ𝕦𝕟𝕜 𝕋𝕖𝕒𝕞☠︎✞");
        return "✞☠︎ℕ𝕖𝕠𝕟ℙ𝕦𝕟𝕜 𝕋𝕖𝕒𝕞☠︎✞";



    }
    document.getElementById("resp").innerHTML = `nombre del grupo <br> ${saludar23()}`

}
//-------------------------------------------------------------------------------------------
//64. Función con return para convertir grados Celsius a Fahrenheit
calor(){

    let cel = parseInt (document.getElementById("cel").value);
   function conver(cel){
    let fahr = (cel * (9 / 5)) + 32
    return fahr;

   }
   document.getElementById("resp").innerHTML =`${cel} grados Celsius a Fahrenheit : ${conver(cel)} `

}
//------------------------------------------------------------------------------------------- 
//65. Función con parámetros para contar un carácter en una frase.
fraseee(){
    let frase = document.getElementById("frase").value
    let conta = 0
    let carac = document.getElementById("carac").value

    function contardorpro (frase , carac){
        for ( let i = 0; i < frase.length;i++){
            if(frase[i]== carac ){
                conta++
            }
        }
        return conta;

    }
    let respuesta  = contardorpro (frase , carac)
    document.getElementById("resp").innerHTML = `🌻caracter: ${carac} <br> 🌻veces encontrado: ${respuesta } `

}
//------------------------------------------------------------------------------------------- 
//66. Función sin return para imprimir números del 1 al 10.
seriepro(){
    
    function secuencia(){
        let respu = ""
        for (let i = 1 ; i < 11;i++){
            console.log(i);
            respu += i +  " ";
            
        }return respu;
       
       



    }
    document.getElementById("resp").innerHTML = `serie del 1 al 10 <br> ${secuencia()}`

}
//------------------------------------------------------------------------------------------- 
//7. Función con parámetros y return para sumar una lista de números.

listanumero(){

    let num1 = parseInt (document.getElementById("num1").value);
    let num2 = parseInt (document.getElementById("num2").value);
    let num3 = parseInt (document.getElementById("num3").value);
    let num4 = parseInt (document.getElementById("num4").value);
    let total = 0

    function suma (num1, num2 ,num3, num4){
        total= num1 + num2 + num3 + num4
        return total;
    }
    document.getElementById("resp").innerHTML = `suma total: ${suma (num1, num2 ,num3, num4)}`




}
//------------------------------------------------------------------------------------------- 





  //------------------------------------------------------------------------------------------- 
//precio(){

  //let enviokilometro = parseInt (document.getElementById("enviokilometro").value);
  
  //let costokilometro  = parseInt (document.getElementById("enviokilometro").value);



 // if (enviokilometro<=50){
    //costokilometro = 10
  //}else{
   // costokilometro = 20
  //}


  
 // document.getElementById("resp").innerHTML = `el coste de envio seria:${costokilometro}`


//}


//descuento(){
   // let descuento = 0 
    //let totaldecompras = parseInt (document.getElementById(" totaldecompras").value);

    //if  (totaldecompras < 500){
       // descuento = totaldecompras * 10 / 100
        //let promo = "te gasnaste descuento del 10% en la proxima compra"

       //document.getElementById("resp").innerHTML = `${totaldecompras} <br> ${promo}`

    //}else{

        //document.getElementById("resp").innerHTML = `tu totalde compras es ${totaldecompras} no tienes descuento `



   // }

//}














   


}
let ope = new Ejercicio1();
//ope.valory()
//ope.valorZ()
//ope.valorw()
//ope.valorv()
//ope.valoru()
//ope.mayorQUE()
//ope.valorfinal()
//ope.valorfinal2()
//ope.mayorquex2()
//ope.maryorqueraro()
//ope.suma()
//ope.triangulo()
//ope.parimpar()
//ope.calculadora()
//ope.tablaMultiplicar()
//ope.palabra()
//ope.serie1al50()
//ope.tablaxd()
//ope.vocales()
//ope.digitos()
//ope.juegosepsi()
//ope.alfaaz()
//ope.del1al100()
//ope.numcaracte()
//ope.sumainfinita()
//ope.paraAtras()
//ope.arreglo1()
//ope.calificaciones()
//ope.mayomenor()
//ope.busqueda()
//ope.paraatrasbb()
//ope.indice()
//ope.saludo()
//ope.function2()
//ope.function3()
//ope.function4()
//ope.function5()
//ope.saludo23()
//ope.calor()
//ope.fraseee()
//ope.seriepro()
//ope.listanumero()

//ope.numerorr()
//ope.añooo()
//ope.clowncosmico()
//ope.quincena()
//ope.diasepsi()






