const botaoCardapio = document.querySelector("#cardapio");
const checkbox = document.querySelectorAll(".input-checkbox");
const formulario = document.querySelectorAll(".section-form-produto div")


botaoCardapio.addEventListener("click", () => {
    window.location.href = "cardapio.html";
  });

const checkboxAction = checkbox.forEach((element, index) => {
  element.addEventListener("change", (event) => {
    const idProduto = event.target.id;

    const formularioElemento = formulario.forEach((element) => {
      return element instanceof HTMLElement
    })

    console.log(formularioElemento)
  })
})

