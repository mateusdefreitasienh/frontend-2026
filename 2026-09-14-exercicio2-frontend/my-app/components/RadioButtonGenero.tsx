
"use client";

import { useState } from "react";

export default function RadioButtonGenero() {

    const [genero, setGenero] = useState("")

    return (
        <form>
            <div>
                <label>
                    <input
                        type="radio"
                        value="Masculino"
                        checked={genero === "Masculino"}
                        onChange={(event) => setGenero(event.target.value)}
                    />
                    Masculino
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        value="Feminino"
                        checked={genero === "Feminino"}
                        onChange={(event) => setGenero(event.target.value)}
                    />
                    Feminino
                </label>
            </div>

            <div>
                <label>
                    <input
                        type="radio"
                        value="Outro"
                        checked={genero === "Outro"}
                        onChange={(event) => setGenero(event.target.value)}
                    />
                    Outro
                </label>
            </div>
        </form>
    );
}



// 8) Utilize radio buttons para implementar a seguinte interface (só a lógica, o estilo não importa):