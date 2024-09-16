let cantidad = document.getElementById('cantidad'); //funcion "document" accede a todos los elm del la pagina "metodo getElementById" selecciona elementos por su ID
let boton = document.getElementById('boton');
const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz013456789';
let contrasena = document.getElementById('contrasena')

function generar(){

    let numeroDigitado = parseInt (cantidad.value) // parseInt convierte el tipo de variable a INT

    if(numeroDigitado < 8){
        alert("La cantidad Minima de caracteres es 8"); // funcion  alert para mostar mensaje al usuario
    }else{
        let password = ' ';
        for(let i=0; i < numeroDigitado; i ++){
    
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)]; //en cada iteraccion se obtine char dif
  
    
            password+=caracterAleatorio;
        }
        contrasena.value= password;
    }

}


// console.log(typeof texto);Metodo typeof para visualizar el tipo de dato en consola utilizando la funcion "console.log"
// dentro del if se utiliza "numeroDigitado" ya que es la trasnformacion a int del elemnto cantidad que se obtuvo en la linea 1
// Math.random genera un numero aleatorio entre 0 y 1
//Math.floor Redodne los valores a numeros enteros
// += concatena y agrega valores