"use client";

import { useState } from "react";

export default function ValidaSenhaRender() {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // Validação direta no corpo do componente (re-render)
  let mensagem = "";
  let cor = "";

  if (senha !== "" || confirmarSenha !== "") {
    if (senha === confirmarSenha) {
      mensagem = "Formulário enviado com sucesso";
      cor = "green";
    } else {
      mensagem = "As senhas precisam ser iguais";
      cor = "red";
    }
  }

  return (
    <div>
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

      {mensagem && (
        <p style={{ color: cor }}>{mensagem}</p>
      )}
    </div>
  );
}
