"use client";

import { useState } from "react";

export default function CampoSenhaReRender() {

    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    let mensagem = ""
    let cor = ""

    if (senha !== confirmarSenha) {
        mensagem = "As senhas precisam ser iguais";
        cor = "red";
    } else {
        mensagem = "Formulário enviado com sucesso";
        cor = "green";
    }

    return (
        <div>
            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => {
                    setSenha(e.target.value);
                }}
            />
            <input
                type="password"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => {
                    setConfirmarSenha(e.target.value);
                }}
            />
            <p style={{ color: cor }}>{mensagem}</p>
        </div>
    )
}

// 6) Copie o código da questão 4. Agora, faça o mesmo, mas sem utilizar useEffect e nem botão.Como ? Ora, valide dentro do próprio componente a cada re - render!