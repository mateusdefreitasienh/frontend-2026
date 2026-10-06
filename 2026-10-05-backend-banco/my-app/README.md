# Backend e Banco

## Para rodar alguma funçao no backend

- `quandoClicaNoServer.ts`

```ts
"use server";

export async function quandoClicaNoServer() {
    console.log("Clicou!");
}
```

- `page.tsx`

```tsx
"use client";

import { quandoClicaNoServer } from "./quandoClicaNoServer";

export default function Home() {
    return (
        <div>
            <button onClick={quandoClicaNoServer}>Clique-me!</button>
        </div>
    );
}
```

- Assim o front roda no cliente, mas a função roda no servidor

## Função de login

- `loginNoServer.ts`
Faz validacao no server
```ts
"use server";

export async function loginNoServer(usuario: string, senha: string) {
    if (usuario === 'admin' && senha === 'admin') {
        return "Login com sucesso!";
    } else {
        return "Usuario ou senha invalidos!";
    }
}
```

- `page.tsx`
```tsx
"use client";

import { useState } from "react";
import { quandoClicaNoServer } from "./quandoClicaNoServer";
import { loginNoServer } from "./loginNoServer";

export default function Home() {

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    async function quandoEnvia(event: any) {
        event.preventDefault();
        const resposta = await loginNoServer(usuario, senha);
        alert(resposta)
    }

    return (
        <div>
            <div className="bg-amber-500 w-[256px] h-[256px]">
                <input
                    type="text"
                    placeholder="Usuário"
                    className="border-4 border-red-600 bg-purple-500 p-4"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)} />
                <input
                    type="password"
                    placeholder="Senha"
                    className="border-4 border-green-500 bg-blue-400 p-2"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)} />
                <button
                    type="submit"
                    className="text-amber-300 font-bold bg-pink-700 p-4 m-5 border-6 border-gray-400"
                    onClick={quandoEnvia}>
                    Enviar
                </button>
            </div>

        </div>
    );
}
```