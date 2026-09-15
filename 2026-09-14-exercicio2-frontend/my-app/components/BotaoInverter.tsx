"use client";

import { useState } from "react";

export default function BotaoInverter() {

    const [texto, setTexto] = useState("");

    function inverter() {
        const textoInvertido = texto.split("").reverse().join("");
        setTexto(textoInvertido);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Digite um texto"
                value={texto}
                onChange={(event) => setTexto(event.target.value)}
            />
            <button onClick={inverter}>Inverter</button>
        </div>
    );
}

// 7) Crie um campo de texto com um botão de inverter. Ao pressionar o botão, o texto do campo de texto deve ser invertido.
