const buttonEncriptar = document.getElementById("button-encriptor");
const buttonDesencriptar = document.getElementById("button-desencriptor");
const textResponseH = document.getElementById("main_response_h1");
const textResponseP = document.getElementById("main_response_p");

let textoEncriptado = "";

function encriptar() {
  const vocales = ["a", "e", "i", "o", "u"];
  const claves = ["ai", "enter", "imes", "ober", "ufat"];
  const texto = document.getElementById("input_encriptor_text").value;
  console.log(texto);
  let letra;
  let bb = true;
  textoEncriptado = "";
  for (let x = 0; x < texto.length; x++) {
    letra = texto[x];
    console.log(letra);
    for (let y = 0; y < vocales.length; y++) {
      if (letra == vocales[y]) {
        textoEncriptado = textoEncriptado + claves[y];
        bb = false;
        break;
      }
    }
    if (bb) {
      textoEncriptado = textoEncriptado + letra;
    }
    bb = true;
  }
  clearMessage();
  console.log(textoEncriptado);
  showMessageEncript();
  console.log(textoEncriptado);
}

function showMessageEncript() {
  textResponseH.innerHTML = textoEncriptado;
  textResponseP.innerHTML = "";
  console.log(textResponseH);
}

function clearMessage() {
  document.getElementById("input_encriptor_text").value = "";
}

// const mapa = {
//   a: "ai",
//   e: "enter",
//   i: "imes",
//   o: "ober",
//   u: "ufat",
// };
// const mapa2 = Object.entries(mapa).reduce(
//   (acumulado, [key, value]) => ({
//     ...acumulado,
//     [value]: key,
//   }),
//   {}
// );

// console.log(mapa2);
// const encriptar = () => {
//   const texto = document.getElementById("normalText").value;
//   const palabras = texto.split(" ");
//   const palabrasEncriptadas = palabras.map(palabra =>
//     palabra
//       .split("")
//       .map(letra => mapa[letra] ?? letra)
//       .join("")
//   );
//   console.log(palabrasEncriptadas.join(" "));
//   return palabrasEncriptadas.join(" ");
// };
// let expRegularEncriptar = /./;
// let desEncriptar = /(ai|enter|imes|ober|ufat)/;
// const encriptar = (expRegular, value, id) => () => {
//   const texto = document.getElementById("input_encriptor_text").value;
//   const palabras = texto.split(" ");
//   const palabrasEncriptadas = palabras.map(palabra =>
//     palabra
//       .split(expRegular)
//       .map(letra => value[letra] ?? letra)
//       .join("")
//   );
//   console.log(palabrasEncriptadas.join(" "));
//   return palabrasEncriptadas.join(" ");
// };

// buttonEncriptar.onclick = encriptar(expRegularEncriptar, mapa, "normalText");
// buttonDesencriptar.onclick = encriptar(desEncriptar, mapa2, "normalText");

/*haibimesai ufatnai venterz*/
