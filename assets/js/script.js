const botaoProduto = document.querySelector(".button-produtos");
const botaoCardapio = document.querySelector("#cardapio");

window.document.addEventListener("DOMContentLoaded", () => {
  botaoProduto.addEventListener("click", () => {
    window.location.href = "pedido.html";
  });
});

botaoCardapio.addEventListener("click", () => {
  window.location.href = "cardapio.html";
});

window.addEventListener("scroll", () => {
  const botao = document.getElementById("botao");

  if (window.scrollY > 300) {
    botao.style.display = "block";
    botao.addEventListener("click", () => {
      window.location.href = "#Home";
    });
  } else {
    botao.style.display = "none";
  }
});
