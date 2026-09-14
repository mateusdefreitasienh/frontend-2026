"use client";

import { useState } from "react";
import BotaoOnOff from "@/components/BotaoOnOff";
import BotaoOnOffControlado from "@/components/BotaoOnOffControlado";
import ValidaNome from "@/components/ValidaNome";
import ValidaSenha from "@/components/ValidaSenha";
import ValidaSenhaEffect from "@/components/ValidaSenhaEffect";
import ValidaSenhaRender from "@/components/ValidaSenhaRender";
import InverterTexto from "@/components/InverterTexto";
import RadioGenero from "@/components/RadioGenero";
import SelectFrutas from "@/components/SelectFrutas";
import TabContent from "@/components/TabContent";

export default function Home() {
  const [ligado, setLigado] = useState(false);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Exercício 2</h1>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 1: Botão ON/OFF (Estado próprio)</h2>
        <BotaoOnOff />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 2: Botão ON/OFF (Props)</h2>
        <BotaoOnOffControlado
          ligado={ligado}
          onClick={() => setLigado(!ligado)}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 3: Validação de Nome</h2>
        <ValidaNome />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 4: Validação de Senha (com Botão)</h2>
        <ValidaSenha />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 5: Validação de Senha (com useEffect)</h2>
        <ValidaSenhaEffect />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 6: Validação de Senha (no Re-render)</h2>
        <ValidaSenhaRender />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 7: Inverter Texto</h2>
        <InverterTexto />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 8: Radio Buttons (Female, Male, Other)</h2>
        <RadioGenero />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 9: Select de Frutas</h2>
        <SelectFrutas />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Item 10: Tab Content</h2>
        <TabContent />
      </div>
    </main>
  );
}
