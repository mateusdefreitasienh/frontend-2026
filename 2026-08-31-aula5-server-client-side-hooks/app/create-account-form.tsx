"use client";

import { useState, useEffect } from "react";

export default function CreateAccountForm() {

  const [nome, setNome] = useState(""); // define o nome
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    console.log(`
      Nome: ${nome},
      Sobrenome: ${sobrenome},
      Email: ${email},
      Senha: ${senha},
      `);
  }, [nome, sobrenome, email, senha]);

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(event) => {
        event.preventDefault(); // impede que a pagina seja recarregada
        setNome("Teste") // atualiza o nome
        alert(nome)
      }}>
      <input type="text" placeholder="Digite o seu nome" value={nome} onChange={(event) => setNome(event.target.value)}/>
      <input type="text" placeholder="Digite o seu sobrenome" value={sobrenome} onChange={(event) => setSobrenome(event.target.value)} />
      <input type="email" placeholder="Digite o seu email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input type="password" placeholder="Digite a sua senha" value={senha} onChange={(event) => setSenha(event.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  )
}