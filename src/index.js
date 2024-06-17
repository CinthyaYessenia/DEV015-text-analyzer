import analyzer from "./analyzer.js";

// Selectores del DOM 
// 1. Seleccionar los elementos de HTML en JS
const textarea = document.querySelector('[name=user-input]');
const palabras = document.querySelector('[data-testid="word-count"]');
const caracteres = document.querySelector('[data-testid="character-count"]');
const caracteresExcluyendo = document.querySelector('[data-testid="character-no-spaces-count"]');
const números = document.querySelector('[data-testid="number-count"]');
const Suma = document.querySelector('[data-testid="number-sum"]');
const longitud = document.querySelector('[data-testid="word-length-average"]');


const buttonReset = document.getElementById("reset-button");

// 2. Añadir un evento clic al botón
buttonReset.addEventListener("click", function () {
  textarea.value = "";
  palabras.innerHTML = "Recuento de palabras: ";
  caracteres.innerHTML = "Recuento de caracteres: ";
  caracteresExcluyendo.innerHTML = "Caracteres sin espacios ni signos: ";
  números.innerHTML = "Recuento de números: ";
  Suma.innerHTML = "Suma total de números: ";
  longitud.innerHTML = "Longitud media de las palabras: ";
});


textarea.addEventListener("input", function () {
 
  analyzer.getWordCount(textarea.value)
  //textarea.value = "";
  palabras.innerHTML = "Recuento de palabras: " + analyzer.getWordCount(textarea.value);
  caracteres.innerHTML = "Recuento de caracteres: " + analyzer.getCharacterCount(textarea.value);
  caracteresExcluyendo.innerHTML = "Caracteres sin espacios ni signos: " + analyzer.getCharacterCountExcludingSpaces(textarea.value);
  números.innerHTML = "Recuento de números: " + analyzer.getNumberCount(textarea.value);
  Suma.innerHTML = "Suma total de números: " + analyzer.getNumberSum(textarea.value);
  longitud.innerHTML = "Longitud media de las palabras: " + analyzer.getAverageWordLength(textarea.value);
});
