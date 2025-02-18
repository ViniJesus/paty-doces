const botaoCardapio = document.querySelector("#cardapio");
const checkbox = document.querySelectorAll(".input-checkbox");
const formulario = document.querySelectorAll(".section-form-produto div");
const precoTotalElemento = document.querySelector(".preco_total span");

const selecionarBolo = document.querySelector("#recheio");
const pesoBolo = document.querySelector("#bolo-peso");
const massaChocolate = document.querySelector("#bolo-massa");
const selecionarDoces = document.querySelector("#doces-selecao");
const quantidadeDoces = document.querySelector("#doces-quantidade");
const selecionarDocesFinos = document.querySelector("#doces-finos-selecao");
const quantidadeDocesFinos = document.querySelector("#doces-finos-quantidade");
const selecionarSalgadosFritos = document.querySelector(
  "#salgados-selecao-fritos"
);
const selecionarSalgadosAssados = document.querySelector(
  "#salgados-selecao-assados"
);
const quantidadeSalgadosFritos = document.querySelector(
  "#salgados-quantidade-fritos"
);
const quantidadeSalgadosAssados = document.querySelector(
  "#salgados-quantidade-assados"
);

// Tabela de preços do cardápio
const precos = {
  bolo: {
    doce_de_leite: 70.9,
    creme_belga: 70.9,
    mouse_doce_de_leite: 72.9,
    doce_de_leite_abacaxi: 77.9,
    doce_de_leite_nozes_ameixa: 104.9,
    doce_de_leite_morangos: 93.9,
    creme_belga_trufado: 82.9,
    creme_belga_abacaxi_pessego: 79.5,
    brigadeiro_tradicional: 91.8,
    brigadeiro_branco: 93.5,
    bicho_de_pe: 89.5,
    prestigio: 89.5,
    mouse_doce_de_leite_com_morango: 85.9,
    mouse_maracuja: 85.9,
    mouse_limao: 85.9,
    brigadeiro_cereja: 94.9,
    mouse_chocolate: 94.9,
    abacaxi_coco: 88.9,
    brigadeiro_morangos: 102.0,
    brigadeiro_nutella: 110.0,
    leite_ninho_trufado: 96.9,
    leite_ninho_trufado_varios: 114.9,
    floresta_bca_negra: 120.9,
    trufado_tradicional: 112.9,
    frutas_vermelhas: 123.9,
  },
  doces: {
    brigadeiro_cento: 115.8,
    bicho_de_pe_cento: 115.8,
    beijinho_cento: 115.8,
    pacoquinha_cento: 122.5,
    cajuzinho_cento: 125.3,
    churros_cento: 125.8,
    brigadeiro_nutella_cento: 148.8,
    brigadeiro_ninho_nutella_cento: 152.4,
    brigadeiro_dois_amores_cento: 160.5,
  },
  doces_finos: {
    surpresa_de_uva: 3.0,
    olho_de_sogra: 3.0,
    mini_trufas: 3.5,
    mini_trufas_com_topper: 4.8,
    camafeu: 3.5,
    bem_casado: 4.5,
    caixinhas_de_chocolate: 3.8,
    copinhos_de_chocolate: 3.3,
  },
  salgadosFritos: {
    coxinhas: 98.5,
    risoles_queijo_presunto: 98.5,
    bolinhas_queijo: 98.5,
    enroladinho_salsicha: 98.5,
    croquete_carne_frango: 98.5,
    bolinho_carne: 98.5,
    kibe: 98.5,
  },
  salgadosAssados: {
    esfiha_carne: 121.5,
    esfiha_frango: 121.5,
    esfiha_calabresa_queijo: 121.5,
    mini_pizza_mussarela: 121.5,
    mini_pizza_presunto_queijo: 121.5,
    mini_pizza_calabresa: 121.5,
    enroladinho_salsicha: 121.5,
  },
};

// Pedido armazenado
const pedido = {
  bolo: { nome: "", peso: 1, massaChocolate: false },
  doces: { nome: "", quantidade: 100 },
  doces_finos: { nome: "", quantidade: 30 },
  salgadosFritos: { nome: "", quantidade: 100 },
  salgadosAssados: { nome: "", quantidade: 100 },
};

const calcularPrecoTotal = () => {
  let total = 0;

  if (pedido.bolo.nome && precos.bolo[pedido.bolo.nome]) {
    total += pedido.bolo.peso * precos.bolo[pedido.bolo.nome];
    if (pedido.bolo.massaChocolate) {
      total += 6.5 * pedido.bolo.peso;
    }
  }
  if (pedido.doces.nome && precos.doces[pedido.doces.nome]) {
    total += (pedido.doces.quantidade / 100) * precos.doces[pedido.doces.nome];
  }
  if (pedido.doces_finos.nome && precos.doces_finos[pedido.doces_finos.nome]) {
    total +=
      pedido.doces_finos.quantidade *
      precos.doces_finos[pedido.doces_finos.nome];
  }
  if (
    pedido.salgadosFritos.nome &&
    precos.salgadosFritos[pedido.salgadosFritos.nome]
  ) {
    total +=
      (pedido.salgadosFritos.quantidade / 100) *
      precos.salgadosFritos[pedido.salgadosFritos.nome];
  }
  if (
    pedido.salgadosAssados.nome &&
    precos.salgadosAssados[pedido.salgadosAssados.nome]
  ) {
    total +=
      (pedido.salgadosAssados.quantidade / 100) *
      precos.salgadosAssados[pedido.salgadosAssados.nome];
  }

  precoTotalElemento.textContent = total.toFixed(2);
};

// Eventos para checkboxes
checkbox.forEach((element) => {
  element.addEventListener("change", (event) => {
    const idProduto = event.target.id;
    const isChecked = event.target.checked;

    // Exibe ou oculta o formulário correspondente
    if (idProduto === "bolo") {
      formulario[0].classList.toggle("ativo", isChecked);
      if (!isChecked) {
        // Resetar valores do bolo
        pedido.bolo = { nome: "", peso: 1, massaChocolate: false };
        selecionarBolo.value = "";
        pesoBolo.value = "1";
        massaChocolate.value = "";
      }
    } else if (idProduto === "doce") {
      formulario[1].classList.toggle("ativo", isChecked);
      if (!isChecked) {
        // Resetar valores dos doces
        pedido.doces = { nome: "", quantidade: 100 };
        selecionarDoces.value = "";
        quantidadeDoces.value = "100";
        pedido.doces_finos = { nome: "", quantidade: 30 };
        selecionarDocesFinos.value = "";
        quantidadeDocesFinos.value = "30";
      }
    } else if (idProduto === "salgado") {
      formulario[2].classList.toggle("ativo", isChecked);
      if (!isChecked) {
        // Resetar valores dos salgados
        pedido.salgadosFritos = { nome: "", quantidade: 100 };
        pedido.salgadosAssados = { nome: "", quantidade: 100 };
        selecionarSalgadosFritos.value = "";
        selecionarSalgadosAssados.value = "";
        quantidadeSalgadosFritos.value = "100";
        quantidadeSalgadosAssados.value = "100";
      }
    }

    calcularPrecoTotal();
  });
});

// Eventos para seletores de bolo
// Eventos corrigidos
selecionarBolo.addEventListener("change", (event) => {
  pedido.bolo.nome = event.target.value;
  calcularPrecoTotal();
});

pesoBolo.addEventListener("change", (event) => {
  pedido.bolo.peso = parseFloat(event.target.value) || 1;
  calcularPrecoTotal();
});

massaChocolate.addEventListener("change", (event) => {
  pedido.bolo.massaChocolate = event.target.value === "chocolate";
  calcularPrecoTotal();
});

selecionarDoces.addEventListener("change", (event) => {
  pedido.doces.nome = event.target.value;
  calcularPrecoTotal();
});

quantidadeDoces.addEventListener("change", (event) => {
  pedido.doces.quantidade = parseInt(event.target.value) || 100;
  calcularPrecoTotal();
});

selecionarDocesFinos.addEventListener("change", (event) => {
  pedido.doces_finos.nome = event.target.value;
  calcularPrecoTotal();
});

quantidadeDocesFinos.addEventListener("change", (event) => {
  pedido.doces_finos.quantidade = parseInt(event.target.value) || 30;
  calcularPrecoTotal();
});

selecionarSalgadosFritos.addEventListener("change", (event) => {
  pedido.salgadosFritos.nome = event.target.value;
  calcularPrecoTotal();
});

quantidadeSalgadosFritos.addEventListener("change", (event) => {
  pedido.salgadosFritos.quantidade = parseInt(event.target.value) || 100;
  calcularPrecoTotal();
});

selecionarSalgadosAssados.addEventListener("change", (event) => {
  pedido.salgadosAssados.nome = event.target.value;
  calcularPrecoTotal();
});

quantidadeSalgadosAssados.addEventListener("change", (event) => {
  pedido.salgadosAssados.quantidade = parseInt(event.target.value) || 100;
  calcularPrecoTotal();
});

botaoCardapio.addEventListener("click", () => {
  window.location.href = "cardapio.html";
});

calcularPrecoTotal();
