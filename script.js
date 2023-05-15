// a = ai, e = enter, i = imes, o = ober, u = ufat


function enc(){
  var texto = document.getElementById("text-area").value.toLowerCase();
  var textReplace = texto.replace(/e/igm,"enter");
  var textReplace = textReplace.replace(/i/igm,"imes");
  var textReplace = textReplace.replace(/o/igm,"ober");
  var textReplace = textReplace.replace(/a/igm,"ai");
  var textReplace = textReplace.replace(/u/igm,"ufat");
  document.getElementById("mensaje").innerHTML = textReplace;
}

function desenc(){
  var texto = document.getElementById("mensaje").value.toLowerCase();
 
  var textReplace = texto.replace(/enter/igm,"e");
  var textReplace = textReplace.replace(/imes/igm,"i");
  var textReplace = textReplace.replace(/ober/igm,"o");
  var textReplace = textReplace.replace(/ai/igm,"a");
  var textReplace = textReplace.replace(/ufat/igm,"u");
  document.getElementById("mensaje").innerHTML = textReplace;
}

function copy(){
  var texto = document.querySelector("#mensaje");
  texto.select();
  document.execCommand("copy");
  alert("texto guardado en portapapeles");
}
