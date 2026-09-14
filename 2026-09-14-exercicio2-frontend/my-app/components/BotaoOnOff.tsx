"use client";

import { useState } from "react";

export default function BotaoOnOff() {
  const [ligado, setLigado] = useState(false);

  return (
    <button
      onClick={() => setLigado(!ligado)}
      style={{ backgroundColor: ligado ? "green" : "red", color: "white" }}
    >
      {ligado ? "Ligado" : "Desligado"}
    </button>
  );
}
