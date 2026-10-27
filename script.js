const modalCadastro = document.getElementById("modalCadastro");
const btnCadastrar = document.getElementById("btnCadastrar");
const btnCancelar = document.getElementById("btnCancelar");
const formJogo = document.getElementById("formJogo");
const listarJogos = document.getElementById("listarJogos");
const mensagemVazia = document.getElementById("mensagemVazia");

const inputTitulo = document.getElementById("titulo");
const inputPlataforma = document.getElementById("plataforma");
const inputDesenvolvedora = document.getElementById("desenvolvedora");
const inputImagem = document.getElementById("imagemUrl");
const inputPreco = document.getElementById("preco");

btnCadastrar.addEventListener("click", () => {
    modalCadastro.showModal();
});

btnCancelar.addEventListener("click", () => {
    modalCadastro.close();
    formJogo.reset();
});

formJogo.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = inputTitulo.value.trim();
    const plataforma = inputPlataforma.value.trim();
    const desenvolvedora = inputDesenvolvedora.value.trim();
    const imagemUrl = inputImagem.value.trim();
    const preco = Number(inputPreco.value);

    if (!formJogo.reportValidity()) {
        return;
    }

    if (preco < 0 || !Number.isFinite(preco)) {
        alert("Digite um preço válido.");
        return;
    }

    mensagemVazia.style.display = "none";

    const card = document.createElement("article");
    card.classList.add("card-jogo");

    const imagem = document.createElement("img");
    imagem.classList.add("capa");
    imagem.src = imagemUrl;
    imagem.alt = "Capa do jogo " + titulo;
    imagem.loading = "lazy";

    imagem.addEventListener("error", () => {
        imagem.alt = "Imagem indisponível para " + titulo;
        imagem.removeAttribute("src");
        imagem.style.height = "190px";
        imagem.style.background = "#292320";
    });

    const info = document.createElement("div");
    info.classList.add("info-jogo");

    const nomeJogo = document.createElement("h3");
    nomeJogo.textContent = titulo;

    const plataformaJogo = document.createElement("p");
    plataformaJogo.textContent = "Plataforma: " + plataforma;

    const desenvolvedoraJogo = document.createElement("p");
    desenvolvedoraJogo.textContent =
        "Desenvolvedora: " + desenvolvedora;

    const precoJogo = document.createElement("strong");
    precoJogo.classList.add("preco");
    precoJogo.textContent = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    info.appendChild(nomeJogo);
    info.appendChild(plataformaJogo);
    info.appendChild(desenvolvedoraJogo);
    info.appendChild(precoJogo);

    card.appendChild(imagem);
    card.appendChild(info);

    listarJogos.appendChild(card);

    formJogo.reset();
    modalCadastro.close();
});
