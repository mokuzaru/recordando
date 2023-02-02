console.log("conectado");

/*

    var let const


    var : Crear variables globales

    let: Crear variables locales

    const: Para crear constantes


*/

/*

    String
    Bool
    Integer

*/

var a;
var b = "hola";
var c = true;
var d = 1;

//console.log(b + c + d);

let e;
let f = "como estan";
let g = false;
let h = 10;


let ui = 90;
const qwer = 500;

//console.log(f + g + h);

function primer(){
    //console.log(b + f);
    return b+f;
}

var z = primer();

//console.log(z);


function suma(a,b){
    a = a*10;
    var ui = 80;

    //console.log(ui);
    return a * b;
}

d = d + 10;
var ab = suma(d,qwer);
//console.log(ui);
//console.log(ab);

var float = 3.14;
var char = 'o';
var array = ["manzana",1237,3.14,true];
/*var objeto = {
    array[],
    "strang", 
    function(),
    1231};
*/
var personaje = new Object();
var personaje = {
    nombre: "principal",
    edad: "40",
    test: function(){return "tls"},
    habilidades: ["correr","saltar","comer"]
}

console.log(personaje.test());
console.log(personaje.habilidades[2]);


function con(){
    if(personaje.edad < 41){
        personaje.edad ++;
    }
    console.log(personaje.edad);
}
con();