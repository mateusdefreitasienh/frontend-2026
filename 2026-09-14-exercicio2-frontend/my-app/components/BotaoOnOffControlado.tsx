export default function BotaoOnOffControlado(props: any) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.ligado ? "green" : "red", color: "white" }}
    >
      {props.ligado ? "Ligado" : "Desligado"}
    </button>
  );
}
