function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("ligt")) {
  // html.classList.remove("light")
  // } else {
  // html.classList.add("light")
  // }

  html.classList.toggle("light") //modo abreviado

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

//Tudo esta na ordem de execução de cada instrução.
//Primeira instrução estou pegando o HTML, a segunda estou fazendo a troca das classes, terceira é a IMG, e a quarta a troca das imagens.
