# Aula 3 ou 4 - Correção do exercicio

## Componentes
- Criar uma pasta `components` na raiz do projeto.
- Cada componente deve ser um **arquivo individual** (boas práticas).
- Arquivo do componente pode ser `kebab-case` ou `PascalCase`. Qualquer uma das duas está correta.
- Nome do componente (dentro do arquivo) precisa ser `PascalCase`.


## Tailwind
- Zera todos os estilos de todos os componentes
- Instalar a extensão `Tailwind CSS Intelisense`
- Utiliza `className` para atribuir uma classe a um HTML
- **As classes já existem no Tailwind, e nós só aplicamos elas**
- As classes possuem nomes intuitivos

### Definir cor do botão
```html
<button className="bg-red-800" >{props.children}</button>
```

### Definir borda do botão, sempre com texto maiusculo e com texto azul
```html
<button className="border border-blue-700 uppercase text-blue-700" >{props.children}</button>
```

### Padding
- p sempre é pedding
- pb -> padding embaixo
- pt -> padding cima
- px -> eixo X
- py -> eixo Y
```html
<button className="p-2" >{props.children}</button>
```

### Arredondamento
```html
<button className="rounded" >{props.children}</button>
```

### Hover
```html
<button className="hover:cursor-pointer hover:bg-red-600" >{props.children}</button>
```

### Style customizado no page.tsx
- No `page.tsx` posso ter um componente
```html
<Button class="bg-red-700">Botao 1</Button>
```

- No `components/Button.tsx`, posso trazer esse style
```html
<button className=`hover:cursor-pointer hover:bg-red-600 {props.className}` >{props.children}</button>
```

## Tipos das props
- Props ficam em vermelho, pois não foi passado o tipo
- No começo do component, precisamos dizer o tipo das props
`/components/Button.tsx`

```ts
type ButtonProps = {
    children: React.ReactNode;
    className?: string; // informa que className é opicional
    onClick?: () => void; // Funcao vazia
    onClick?: (numA : number, numB : number) => number; // Funcao que recebe 2 numeros e retorna outro numero
}

export default function Button(props : ButtonProps){
    return (
        <button>{props.children}</button>
        );
}
```

## Functions
- Dentro de `page.tsx`, criar uma funcao
```html
function clickBotao() {
    alert("Botao clicado");
}
<Button onClick={clickBotao}></Button>
```

- Dentro de `components/Button.tsx`, criar uma funcao
```html
<button className=`hover:cursor-pointer hover:bg-red-600 {props.className}` >{props.children}</button>
```

## Desestruturação
- Podemos desestruturar os props dentro da function
- Assim nao precisamos chamar `props.children`, somente `children`

```ts
type ButtonProps = {
    children: React.ReactNode;
    className?: string; // informa que className é opicional
    type?: 'text' | 'password'
}

export default function Button({ children, className, type = 'text' } : ButtonProps) { 

    return (
        <button 
            type={type}>
            {children}
        </button>;
    )
}
```