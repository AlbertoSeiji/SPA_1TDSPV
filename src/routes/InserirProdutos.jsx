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

    const newItem = () => {
      
    }



    navigate("/produtos");
  };

  return (
    <div>
      <h1>Inserir Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do produto:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">Descrição:</label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={produto.desc}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            type="text"
            id="preco"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Adicionar Produto</button>
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
