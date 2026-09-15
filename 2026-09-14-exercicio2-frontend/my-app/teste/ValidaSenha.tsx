"use client";

import { useState } from "react";

export default function ValidaSenha() {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cor, setCor] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault(); // impede que a página seja recarregada

    if (senha === confirmarSenha) {
      setMensagem("Formulário enviado com sucesso");
      setCor("green");
    } else {
      setMensagem("As senhas precisam ser iguais");
      setCor("red");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Confirme sua senha"
        value={confirmarSenha}
        onChange={(event) => setConfirmarSenha(event.target.value)}
      />
      <br />
      <button type="submit">Enviar</button>

      {mensagem && (
        <p style={{ color: cor }}>{mensagem}</p>
      )}
    </form>
  );
}
