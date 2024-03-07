function toggleMode() {
  // documentoElement refere-se a tag <html> no index.html
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    saveTheme();
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png");
    saveTheme();
  }
}

// Salvar o tema no localStorage
function saveTheme() {
  let theme = document.documentElement.getAttribute("class");
  localStorage.setItem("class", theme);
}

// carregar o dados salvos no localStorage
document.addEventListener("DOMContentLoaded", function () {
  var themeState = localStorage.getItem("class");
  document.documentElement.setAttribute("class", themeState);
});
