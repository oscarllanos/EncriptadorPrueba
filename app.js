
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar() {
    let texto = document.getElementById("texto").value;

    let textoEncriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    asignarTextoElemento('p', textoEncriptado);
    document.getElementById("muneco").style.display='none';
    document.getElementById("primerMensaje").style.display='none';
    document.getElementById("segundoMensaje").style.display='none';
    document.getElementById('botonCopiar').removeAttribute('hidden');
} 

function desencriptar() {
    let texto = document.getElementById("texto").value;

    let textoEncriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    asignarTextoElemento('p', textoEncriptado);
    document.getElementById("muneco").style.display='none';
    document.getElementById("primerMensaje").style.display='none';
    document.getElementById("segundoMensaje").style.display='none';
    document.getElementById('botonCopiar').removeAttribute('hidden');
}

function copiar() {
    let textoCopiado = document.getElementById("salidaTexto").textContent;
    navigator.clipboard.writeText(textoCopiado)
    alert('Texto copiado');
    document.getElementById("texto").value= '';
}
