# Projeto Next.js

## Instalação

```cmd
npx create-next-app@latest
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Criando novas paginas
- Criar uma nova pastra dentro do `app`, com o nome da url (ex: astra)
- Criar um arquivo `page.tsx` dentro da pasta criada
- Acessar `/astra`

- É possível criar pastra dentro de pasta, ex `app/vw/golf/page.tsx`

## Link entre paginas (href)
- Assim é feito uma pré-renderizacao da pagina antes de abrir, ficando muito mais rápido
```typescript
import Link from 'next/link';

export default function HomePage() {
  return <div>Mateus
    
    <Link href="/astra">Pagina Astra</Link> 
  </div>
}
```

## Criando cabecalho e importando
- Criar um novo arquivo `cabecalho.tsx`
- Codigo cabecalho precisa ser exportado
```ts
export default function Cabecalho() {
    return <header style={{
        width: '100%',
        height: '48px',
        backgroundColor: 'white',
        color: 'black',
        padding: '16px'
    }}>
        Sou um cabeçalho
    </header>
}
```

- Usando cabecalho
```ts
import Link from 'next/link';
import Cabecalho from '../cabecalho'

export default function VwPage() {
  return <div>
    <Cabecalho/>
    Mateus
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Volkswagen_logo.png" alt="" />
    <Link href="vw/jetta">Pagina Jetta</Link>
    <Link href="vw/golf">Pagina Golf</Link>
  </div>
}
```

## Importacao relativa e absoluta
```ts
import Cabecalho from '../../cabecalho'; // importacao relativa
import Rodape from '@/app/rodape'; //importacao absoluta
```

## Componentes
- Criar pasta components na raiz do projeto
- Cria os itens que quiser
- Pega o valor que é passado para ele com `props.children`

`title.tsx`
```ts
export default function Title(props) {
    return <h1 style={{
        color: props.cor,
        fontSize: '20px'
    }}>{props.children}</h1>
}
```


`page.tsx`
```ts
import Link from 'next/link';
import Cabecalho from './cabecalho';
import Rodape from '@/app/rodape'
import Title from '@/components/title';

export default function HomePage() {
  return <div>
    <Cabecalho/>
    <Title cor="red">Este é o titulo da home</Title>
    Mateus
    <br />
    <Link href="/vw">Pagina VW</Link>
    <br />
    <Link href="/astra">Pagina Astra</Link>
    <Rodape/>
  </div>
}
```