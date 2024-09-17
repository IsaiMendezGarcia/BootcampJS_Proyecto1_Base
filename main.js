let cantidad = document.getElementById('cantidad'); //funcion "document" accede a todos los elm del la pagina "metodo getElementById" selecciona elementos por su ID
let boton = document.getElementById('boton');
const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz013456789!@#$%^&*()';
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

function medirSeguridad(){ 
    let contrasenaGenerada = document.getElementById('contrasena');
    let nivelSeguridad = 0;

    // verificamos la longuitud de la contraseña
    if(contrasenaGenerada.length >= 8){
        nivelSeguridad += 1;
    }// verificamos letras MAYUSCULAS
    if(/[A-Z]/.test(contrasenaGenerada)){
        nivelSeguridad += 1;
    }//Verificamos minusculas
    if(/[a-z]/.test(contrasenaGenerada)){
        nivelSeguridad += 1;
    }// Verificamos numeros
    if(/[0-9]/.test(contrasenaGenerada)){
        nivelSeguridad += 1;
    }// Verificamos Caracteres especiales
    if(/[\W_]/.test(contrasenaGenerada)){
        nivelSeguridad += 1;
    }

    // Evalua Nivel de Seguridad

    if(nivelSeguridad === 5){
        alert("La contraseña es muy fuerte");
    }else if ( nivelSeguridad >= 3){
        alert("La contraseña es fuerte");
    }else if( nivelSeguridad === 2){
        alert("La contraseña es debil");
    }else{
        alert("La contraseña es muy debil");
    }
}


// console.log(typeof texto);Metodo typeof para visualizar el tipo de dato en consola utilizando la funcion "console.log"
// dentro del if se utiliza "numeroDigitado" ya que es la trasnformacion a int del elemnto cantidad que se obtuvo en la linea 1
// Math.random genera un numero aleatorio entre 0 y 1
//Math.floor Redondea los valores a numeros enteros
// += concatena y agrega valores
// /[A-Z]/: Esto es una expresión regular (regex). Una expresión regular es una secuencia de caracteres que define un patrón de búsqueda.
//.test() es un método de las expresiones regulares en JavaScript que verifica si el patrón especificado (la regex) coincide con algún contenido en la cadena proporcionada.
// 