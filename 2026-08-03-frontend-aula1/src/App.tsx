import "./styles.css";

export default function App() {
  const resultado = soma(2, 3);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{resultado}</h2>
      <h3>
        <FotoAstra />
      </h3>
      <VerdadeAbsoluta />
      <MentiraAbsoluta />
      <RetanguloVermelho />
      <FotoGolf />
      <Quadrado cor="blue" />
      <Quadrado cor="red" />
      <Quadrado cor="green" />
      <VerdadeColorida cor="red" />
      <VerdadeColorida cor="purple" />
    </div>
  );
}

function soma(a, b) {
  return a + b;
}

// Precisa ser PascalCase
function FotoAstra() {
  return (
    <img src="https://cdn.autopapo.com.br/box/uploads/2021/06/22210527/chevrolet_astra_branco_2011_lateral-732x488.jpg" />
  );
}

// Para passar estilo
function VerdadeAbsoluta() {
  return (
    <h1
      style={{
        color: "red",
        backgroundColor: "blue",
        fontSize: "20px",
      }}
    >
      Astra anda menos que Jetta.
    </h1>
  );
}

function MentiraAbsoluta() {
  return (
    <p
      style={{
        color: "green",
        backgroundColor: "purple",
      }}
    >
      Golf 2.0 NA anda mais que o Astra
    </p>
  );
}

function RetanguloVermelho() {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "300px",
        height: "200px",
      }}
    ></div>
  );
}

function FotoGolf() {
  return (
    <img
      style={{
        width: "500px",
        height: "300px",
      }}
      src="https://www.webmotors.com.br/wp-content/uploads/2022/03/14205834/Volkswagen-Golf_R32-2002-1280-01.jpg"
    />
  );
}

// Para que os valores sejam passadas pela instância
function Quadrado(props) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: props.cor,
      }}
    ></div>
  );
}

function VerdadeColorida(props) {
  return (
    <p
      style={{
        color: props.cor,
      }}
    >
      PC é melhor que MAC
    </p>
  );
}
