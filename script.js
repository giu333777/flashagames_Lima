const modal = document.getElementById("modalCadastro");
const formulario = document.getElementById("formJogo");
const lista = document.getElementById("listarJogos");
const mensagem = document.getElementById("mensagemVazia");

document.getElementById("btnCadastrar").onclick = () => modal.showModal();

document.getElementById("btnCancelar").onclick = () => {
    modal.close();
    formulario.reset();
};

async function listarJogos() {
    const resposta = await fetch("/api/jogos");
    const jogos = await resposta.json();

    lista.innerHTML = "";

    mensagem.style.display = jogos.length === 0 ? "block" : "none";

    jogos.forEach(jogo => {
        lista.innerHTML += `
            <article class="card-jogo">
                <img class="capa" src="${jogo.imagem_url}" alt="${jogo.titulo}">
                <div class="info-jogo">
                    <h3>${jogo.titulo}</h3>
                    <p>Plataforma: ${jogo.plataforma}</p>
                    <p>Desenvolvedora: ${jogo.desenvolvedora}</p>
                    <strong class="preco">
                        ${Number(jogo.preco).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                </div>
            </article>
        `;
    });
}

formulario.onsubmit = async (event) => {
    event.preventDefault();

    const jogo = {
        titulo: document.getElementById("titulo").value,
        plataforma: document.getElementById("plataforma").value,
        desenvolvedora: document.getElementById("desenvolvedora").value,
        imagem_url: document.getElementById("imagemUrl").value,
        preco: document.getElementById("preco").value
    };

    const resposta = await fetch("/api/jogos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jogo)
    });

    if (resposta.ok) {
        alert("Jogo cadastrado com sucesso!");
        formulario.reset();
        modal.close();
        listarJogos();
    } else {
        alert("Erro ao cadastrar jogo.");
    }
};

listarJogos();