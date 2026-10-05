"use client";

import { useState } from "react";

export default function TabContent() {
    const [tabAtiva, setTabAtiva] = useState(1);

    return (
        <div>
            <div style={{ display: "flex", gap: "5px" }}>
                <button
                    onClick={() => setTabAtiva(1)}
                    style={{
                        backgroundColor: tabAtiva === 1 ? "#d1d5db" : "#e5e7eb",
                        padding: "8px 16px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                    }}
                >
                    Tab #1
                </button>
                <button
                    onClick={() => setTabAtiva(2)}
                    style={{
                        backgroundColor: tabAtiva === 2 ? "#d1d5db" : "#e5e7eb",
                        padding: "8px 16px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                    }}
                >
                    Tab #2
                </button>
                <button
                    onClick={() => setTabAtiva(3)}
                    style={{
                        backgroundColor: tabAtiva === 3 ? "#d1d5db" : "#e5e7eb",
                        padding: "8px 16px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                    }}
                >
                    Tab #3
                </button>
            </div>
            <div style={{ border: "1px solid #ccc", padding: "15px", marginTop: "5px" }}>
                <h3>Tab content #{tabAtiva}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    );
}