"use client";

import { useState } from "react";

export default function BotaoOnOff() {

    const [isOn, setIsOn] = useState(false)

    return (
        <div>
            <button
                onClick={() => {
                    setIsOn(!isOn)
                }}
                style={{
                    backgroundColor: isOn ? "green" : "red"
                }}
            >{isOn ? "Ligado" : "Desligado"}
            </button>
        </div>
    );
}