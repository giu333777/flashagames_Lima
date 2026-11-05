const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

app.use(express.json());

const banco = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_flashagames"
});

app.get("/api/jogos", async (req, res) => {
    const [jogos] = await banco.query("SELECT * FROM jogos");
    res.json(jogos);
});

app.post("/api/jogos", async (req, res) => {
    const { titulo, plataforma, desenvolvedora, imagem_url, preco } = req.body;

    await banco.query(
        "INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco) VALUES (?, ?, ?, ?, ?)",
        [titulo, plataforma, desenvolvedora, imagem_url, preco]
    );

    res.json({ mensagem: "Jogo cadastrado!" });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});