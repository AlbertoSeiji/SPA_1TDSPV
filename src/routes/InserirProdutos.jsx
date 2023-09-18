import React, { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";

export default function InserirProduto() {
  const [produto, setProduto] = useState({
    id: ListaProdutos.length + 1,
    nome: "",
    desc: "",
    preco: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      setProduto({ ...produto, [name]: files[0] });
    } else {
      setProduto({ ...produto, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newItem = produto;
    ListaProdutos.push(newItem);
    alert("Produto adicionado com sucesso!");

    navigate("/produtos");
  };

  return (
    <div>
      <h1>Inserir Produto</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Novo Produto</legend>
          <div>
            <label htmlFor="idNome">Nome do produto:</label>
            <input
              type="text"
              id="idNome"
              name="nome"
              value={produto.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição:</label>
            <input
              type="text"
              id="idDesc"
              name="desc"
              value={produto.desc}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idPreco">Preço:</label>
            <input
              type="text"
              id="idPreco"
              name="preco"
              value={produto.preco}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idImg">Imagem:</label>
            <input
              type="file"
              id="idImage"
              name="image"
              value={produto.img}
            />
          </div>
          <button type="submit">Adicionar Produto</button>
        </fieldset>
      </form>

      <h2>Lista de Produtos:</h2>
      <ul>
        {ListaProdutos.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
}
