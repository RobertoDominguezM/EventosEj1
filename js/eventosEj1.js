/**
 * Ejercicio 1
 */
/** A continuación se incluyen las distintas sentencias a ejecutar en la consola 
 * para llevar a cabo el ejercicio
 */
//Recupera el elemento con id “apellido1” (dos opciones)
document.getElementById("apellido1");
document.getElementsByTagName("input")[1];

//Recupera todos los párrafos de una vez
document.getElementsByTagName("p");

//Recupera, de una sola vez, todos los párrafos del div con id “seccionTercera”.
document.querySelectorAll("#seccionTercera *"); //Recupera todos los nodos que sean hijos del elemento identificado por seccionTercera

//Recupera todos los elementos de tipo input.
document.getElementsByTagName("input");

//Recupera los elementos de tipo input con nombre “sexo”.
document.getElementsByName("sexo");

//Recupera los elementos de la lista de la clase “par”.
document.querySelectorAll("li.par");
document.getElementsByClassName("par"); //Si se supiera que no hay elementos de otro tipo con esa misma clase asignada
/**
 * Ejercico 2
 */
/** A continuación se incluyen las distintas sentencias a ejecutar en la consola 
 * para llevar a cabo el ejercicio
 */
//Recupera el primer párrafo que hay dentro del div "seccionPrimera".
let nodoPadre = document.getElementById("seccionPrimera");
let nodoPrimerHijo = nodoPadre.firstElementChild;

//Recupera el tercer párrafo del div anterior.
let tercerHijo = (nodoPadre.children)[2];

//El último elemento de la lista.
let lista = document.getElementsByTagName("ul")[0];
let ultimaFila = lista.lastElementChild;

//La label del input nombre.
let nodoInput = document.getElementById("nombre");
let labelInput = nodoInput.previousElementSibling;
let valorLabel = labelInput.firstChild; //devuelve el contenido de la label, ya que su primer hijo es un nodo de tipo texto
/**
 * Ejercicio 3
 */
/**
 * Soluciones a todos los puntos del ejercicio 3.
 * Para que funcione el partado de las funciones habría que comentar las líneas 
 * de los ejercicios que se prueban por consola
 */

//Recupera el innerHTML del elemento ul y el textContent de dicha etiqueta
let contenido = (document.getElementsByTagName("ul"))[0].innerHTML;
let contenidoTexto = (document.getElementsByTagName("ul"))[0].textContent;
/*contenido contendrá todo lo que hay entre <ul> y </ul>, mientras que 
    contenidoTexto contendrá solo los textos de la lista.
*/

//Recupera el valor del primero input radio de sexo.
let nodoRadio1 = (document.getElementsByName("sexo"))[0];
let valor = nodoRadio1.value;

//Busca como recuperar el valor del sexo que está seleccionado.
let formulario = document.getElementsByTagName("form")[0];
let sexoSeleccionado = formulario.sexo.value; //Otra forma sería recuperando todos los elementos de nombre sexo y recorrerlos para ver cual tiene el atributo checked

/**
 * Las funciones que se detallan a continuación son las que irían en el documento trabajarConDom.js
 */
function aceptar() {
    let nodoNombre = document.getElementById("nombre");
    nodoNombre.focus();
}

function cancelar() {
    let nodoNombre = document.getElementById("nombre");
    nodoNombre.blur();
}
/**
 * Ejercicio 4
 */
/**
 * Crea un elemento de tipo h2 con el texto “Lorem Ipsum de nuevo”. 
 * Inclúyelo como primer elemento hijo del div seccionTercera cuando se pulse sobre el primer párrafo 
 * de dicha sección.
 */
function insertarEncabezadoH2() {
    let nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = "Lorem Ipsum de nuevo";
    let seccionTercera = document.getElementById("seccionTercera");
    let nodoSiguiente = seccionTercera.childNodes[0];
    seccionTercera.insertBefore(nuevoH2, nodoSiguiente);
}

/**
 * El tercer párrafo del div seccionPrimera se colocará justo antes del primer 
 * párrafo(que no tiene por qué ser el primer elemento) del div 
 * seccionTercera(desaparecerá de seccionPrimera).
 */
function cambiarPosicionParrafo() {
    let parrafo = document.querySelectorAll("#seccionPrimera p")[2];
    let seccionTercera = document.getElementById("seccionTercera");
    let nodoSiguiente = document.querySelectorAll("#seccionTercera p")[0];
    seccionTercera.insertBefore(parrafo, nodoSiguiente);
}

/**
 * Crea un div nuevo que se añadirá tras el div seccionSegunda.
 * Clona(con todos sus descendientes) el elemento div que contiene la lista y añádelo como 
 * elemento hijo del nuevo div creado.
 */
function clonarDivLista() {
    let nuevoDiv = document.createElement("div");
    document.body.appendChild(nuevoDiv);

    let divLista = document.getElementById("seccionLista");
    let nuevoDivLista = divLista.cloneNode(true);
    nuevoDiv.appendChild(nuevoDivLista);
}

/**
 * Elimina la última fila de la lista nueva
 */
function eliminarFila() {
    let coleccionListas = document.getElementsByTagName("ul");
    let ultimaLista = coleccionListas[coleccionListas.length - 1];
    let ultimaFila = ultimaLista.lastElementChild;
    ultimaLista.removeChild(ultimaFila);
}
/**
 * Ejercicio 6
 */
/**
 * Cuando se pulse sobre el primer elemento h2:
 *      En caso de que estén visibles los párrafos segundo y quinto de la página, desaparezcan.
 *      En caso contrario, aparecerán en su posición original. 
 *      Se añada al valor del atributo size de los input de tipo texto 5.
 */
function invisibilizarParrafos() {
    //Visibilizar u ocultar párrafos
    let parrafosPagina = document.getElementsByTagName("p");
    let parrafo2 = parrafosPagina[1];
    let parrafo5 = parrafosPagina[4];
    console.log(parrafo2.hidden);
    if (parrafo2.hidden == false) { // Si no tiene atributo hidden se asigna a true
        parrafo2.hidden = true;
        parrafo5.hidden = true;
    } else { //En caso contrario, eliminamos el atributo
        parrafo2.removeAttribute("hidden");
        parrafo5.removeAttribute("hidden")
    }

    //Cambiar size de los inputs
    let inputs = document.getElementsByTagName("input");
    inputs = Array.from(inputs);
    let inputsTexto = inputs.filter(input => {
        if (input.type === "text")
            return true;
    });
    inputsTexto.forEach(input => {
        input.size = input.size + 5;
    });
}

/**
 * Cuando se pase el ratón por encima del texto “Escoge el sexo”: 
 *      Se quite el atributo name a los radio buttons. Comprueba como se comportan ahora.
 */
function eliminarAtributoName() {
    let inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "radio")
            inputs[i].removeAttribute("name");
    }
}

/**
 * Cuando pase el ratón por encima del título del formulario: 
 *      Se añada un nuevo atributo name a los radio button con un valor diferente al que tuvieran de inicio.
 */
function asignarAtributoNombre() {
    let inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].name = "nuevoNombre";
        console.log(inputs[i].value + " " + inputs[i].name);
    }
}
/**
 * Ejercicio 7
 */
/**
 * Crea un elemento de tipo h2 con el texto “Lorem Ipsum de nuevo”. 
 * Inclúyelo como primer elemento hijo del div seccionTercera cuando se pulse sobre el primer párrafo 
 * de dicha sección.
 */
function insertarEncabezadoH2() {
    let nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = "Lorem Ipsum de nuevo";
    let seccionTercera = document.getElementById("seccionTercera");
    let nodoSiguiente = seccionTercera.childNodes[0];
    seccionTercera.insertBefore(nuevoH2, nodoSiguiente);
}

/**
 * Utilizando DOM, cuando se haga doble clik sobre el primer párrafo de la página: 
 *      Asigna a todos los párrafos del documento, cuya posición entre los párrafos sea múltiplo de 3(posición física en la página), el estilo establecido para la clase parrafosEspecial(eliminando cualquier otro estilo anteriormente asignado).
 *      Para los elementos de la lista, cambia el color de fondo a los que tengan asignada la clase par.
 */

function cambiarEstilos() {
    let parrafos = document.getElementsByTagName("p");
    let elementosLi = document.getElementsByClassName("par");

    for (let i = 0; i < parrafos.length; i++) {
        if ((i + 1) % 3 === 0) {
            parrafos[i].classList = "parrafosEspecial";
        }
    }

    for (let j = 0; j < elementosLi.length; j++) {
        elementosLi[j].style.backgroundColor = "red";

    }
}
/**
 * Ejercicio Eventos
 */
window.onload = function() {
    document.getElementById('idh1').onmouseover = eliminarFila;
    document.getElementById('idp').ondblclick = cambiarEstilos;
}