"use client";

import { useState } from "react";

export default function ValidaNome() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cor, setCor] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault(); // impede que a pagina seja recarregada

    if (nome.length < 2) {
      setMensagem("O nome precisa ter pelo menos 2 caracteres");
      setCor("red");
    } else if (nome.length > 20) {
      setMensagem("O nome precisa ter até 20 caracteres");
      setCor("red");
    } else {
      setMensagem("Formulário enviado com sucesso");
      setCor("green");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <br />
      <button type="submit">Enviar</button>

      {mensagem && (
        <p style={{ color: cor }}>{mensagem}</p>
      )}
    </form>
  );
}
