const buttonProduct = document.querySelector(".button-produtos");

buttonProduct.addEventListener("click", () => {
  window.location.href = "pedido.html";
});

window.document.addEventListener("DOMContentLoaded", () => {
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
});
