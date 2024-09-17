let cantidad = document.getElementById('cantidad'); //funcion "document" accede a todos los elm del la pagina "metodo getElementById" selecciona elementos por su ID
let boton = document.getElementById('boton');
const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz013456789!@#$%^&*()_';
let contrasena = document.getElementById('contrasena')

function generar(){

    let numeroDigitado = parseInt (cantidad.value) // parseInt convierte el tipo de variable a INT

    if(numeroDigitado < 8){
        alert("La cantidad Minima de caracteres es 8"); // funcion  alert para mostar mensaje al usuario
    }else{
        let password = ' ';
        for(let i=0; i < numeroDigitado; i ++){
    
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)]; //en cada iteraccion se obtine char dif
  
    
            password+=caracterAleatorio; // se concatena e indexa el char enterior a la variable "password"
        }
        contrasena.value= password;
    }

}

function limpiar(){
    let clearPass = document.getElementById('contrasena');   // Creamos variable y la igualamos al contenido de "contrasena" usando el metodo document.get...
    clearPass.value = ' ';  // la nueva variable almacena el valor de "contrasena" y por medio de "nombrevariable.value" se asigna el vanor de '   ' (NULL)
}


// console.log(typeof texto);Metodo typeof para visualizar el tipo de dato en consola utilizando la funcion "console.log"
// dentro del if se utiliza "numeroDigitado" ya que es la trasnformacion a int del elemnto cantidad que se obtuvo en la linea 1
// Math.random genera un numero aleatorio entre 0 y 1
//Math.floor Redondea los valores a numeros enteros
// += concatena y agrega valores