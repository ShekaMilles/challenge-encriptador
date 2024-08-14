const buttonEncriptar = document.getElementById("button-encriptor");
const buttonDesencriptar = document.getElementById("button-desencriptor");
const textResponseH = document.getElementById("main_response_h1");
const textResponseP = document.getElementById("main_response_p");
const textCopy = document.getElementById("response_img_lupa");

let textoEncriptado = "";
const vocales = ["a", "e", "i", "o", "u"];
const claves = ["ai", "enter", "imes", "ober", "ufat"];

function encriptar() {
  const texto = document.getElementById("input_encriptor_text").value;
  let letra;
  let bb = true;

  textoEncriptado = "";
  if (texto.length > 0) {
    for (let x = 0; x < texto.length; x++) {
      letra = texto[x];
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

    showImglupa(0);
    clearMessage();
    console.log(textoEncriptado);
    showMessageEncript();
    console.log(textoEncriptado);
  } else {
    showImglupa(1);
    showHomeMessage();
  }
}

function desEncriptor() {
  const texto = document.getElementById("input_encriptor_text").value;
  console.log(texto);
  let letra;
  let bb = true;
  textoEncriptado = "";
  if (texto.length > 0) {
    for (let x = 0; x < texto.length; x++) {
      letra = texto[x];
      console.log(letra);
      for (let y = 0; y < vocales.length; y++) {
        if (letra == vocales[y]) {
          switch (letra) {
            case "a":
              x = x + 1;
              break;
            case "e":
              x = x + 4;
              break;
            default:
              x = x + 3;
              break;
          }
          textoEncriptado = textoEncriptado + vocales[y];
          bb = false;
          break;
        }
      }
      if (bb) {
        textoEncriptado = textoEncriptado + letra;
      }
      bb = true;
    }
    showImglupa(0);
    clearMessage();
    console.log(textoEncriptado);
    showMessageEncript();
    console.log(textoEncriptado);
  } else {
    showImglupa(1);
    showHomeMessage();
  }
}

function copyTextEncriptor() {
  navigator.clipboard.writeText(textResponseH.textContent);
}

function showMessageEncript() {
  textResponseH.innerHTML = textoEncriptado;
  textResponseP.innerHTML = "";
  console.log(textResponseH);
}

function showHomeMessage() {
  textResponseH.innerHTML = "Ningún mensaje fue encontrado";
  textResponseP.innerHTML =
    "Ingresa el texto que desees encriptar o desencriptar.";
}

function clearMessage() {
  document.getElementById("input_encriptor_text").value = "";
}

function showImglupa(visible) {
  if (visible == 0) {
    //document.getElementById("response_img_lupa").style.display = "none";
    textCopy.style.display = "none";
  } else {
    textCopy.style.display = "flex";
  }
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
