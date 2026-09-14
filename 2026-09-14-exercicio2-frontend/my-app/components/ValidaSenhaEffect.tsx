"use client";

import { useState, useEffect } from "react";

export default function ValidaSenhaEffect() {
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cor, setCor] = useState("");

  useEffect(() => {
    if (senha === "" && confirmarSenha === "") {
      setMensagem("");
      return;
    }

    if (senha === confirmarSenha) {
      setMensagem("Formulário enviado com sucesso");
      setCor("green");
    } else {
      setMensagem("As senhas precisam ser iguais");
      setCor("red");
    }
  }, [senha, confirmarSenha]);

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
