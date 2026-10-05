"use client";

import { useState } from "react";

export default function SelectFrutas() {
    const [fruta, setFruta] = useState("");

    return (
        <div>
            <select
                value={fruta}
                onChange={(event) => setFruta(event.target.value)}
            >
                <option value="" disabled hidden>
                    Selecione uma fruta
                </option>
                <option value="Maça">Maça</option>
                <option value="Banana">Banana</option>
                <option value="Abacaxi">Abacaxi</option>
                <option value="Bluebarry">Bluebarry</option>
                <option value="Uva">Uva</option>
            </select>
        </div>
    );
}