"use client";

import { useState } from "react";

export default function CampoNome() {

    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [cor, setCor] = useState("");

    function clickSubmit(event: any) {
        event.preventDefault();
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
        <div>
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <button onClick={clickSubmit}>Enviar</button>
            <p style={{ color: cor }}>{mensagem}</p>
        </div>
    )
}

// 3) Crie um campo de nome. Ao pressionar um botão de enviar, você deve validar o campo e mostrar logo abaixo do campo do botão de enviar as mensagens de acordo com a situação:
// - Se <2 caracteres, mostre em vermelho a mensagem "O nome precisa ter pelo menos 2 caracteres"
// - Se >20 caracteres, mostre em vermelho a mensagem "O nome precisa ter até 20 caracteres"
// - Se >= 2 e <= 20, mostre em verde a mensagem "Formulário enviado com sucesso"