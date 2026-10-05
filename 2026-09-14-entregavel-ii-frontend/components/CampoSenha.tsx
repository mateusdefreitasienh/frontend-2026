"use client";

import { useState } from "react";

export default function CampoSenha() {

    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [cor, setCor] = useState("");

    function clickSubmit(event: any) {
        event.preventDefault();

        if (senha !== confirmarSenha) {
            setMensagem("As senhas precisam ser iguais");
            setCor("red");
        } else if (senha.length > 20) {
            setMensagem("O senha precisa ter até 20 caracteres");
            setCor("red");
        } else {
            setMensagem("Formulário enviado com sucesso");
            setCor("green");
        }
    }

    return (
        <div>
            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
            />
            <button onClick={clickSubmit}>Enviar</button>
            <p style={{ color: cor }}>{mensagem}</p>
        </div>
    )
}

// 4) Crie um campo de senha e confirmar senha, ao pressionar um botão de enviar, faça o seguinte:
// - Se as senhas forem iguais, mostre a mensagem "Formulário enviado com sucesso"
// - Caso contrário, mostre a mensagem "As senhas precisam ser iguais"