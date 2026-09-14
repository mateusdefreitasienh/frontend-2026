"use client";

import { useState } from "react";

export default function InverterTexto() {
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
