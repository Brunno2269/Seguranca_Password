function ForcaSenha(senha) {
  let i = 0;
  if (senha.length > 6) {
    i++;
  }
  if (senha.length >= 10) {
    i++;
  }

  if (/[A-Z]/.test(senha)) {
    i++;
  }

  if (/[0-9]/.test(senha)) {
    i++;
  }

  if (/[A-Za-z0-8]/.test(senha)) {
    i++;
  }

  return i;
}

let container = document.querySelector(".container");
document.addEventListener("keyup", function (e) {
  let senha = document.querySelector("#YourPassword").value;

  let forca = ForcaSenha(senha);
  if (forca <= 2) {
    container.classList.add("facil");
    container.classList.remove("media");
    container.classList.remove("dificil");
  } else if (forca >= 2 && forca <= 4) {
    container.classList.remove("facil");
    container.classList.add("media");
    container.classList.remove("dificil");
  } else {
    container.classList.remove("facil");
    container.classList.remove("media");
    container.classList.add("dificil");
  }
});

let senha = document.querySelector("#YourPassword");
let mostrar = document.querySelector(".mostrar");
mostrar.onclick = function () {
  if (senha.type === "password") {
    senha.setAttribute("type", "text");
    mostrar.classList.add("ocultar");
  } else {
    senha.setAttribute("type", "password");
    mostrar.classList.remove("ocultar");
  }
};