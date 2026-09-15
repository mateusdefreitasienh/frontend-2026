"use client";

export default function BotaoOnOffComProps(props: any) {
    return (
        <div>
            <button
                onClick={props.onClick}
                style={{ backgroundColor: props.ligado ? "green" : "red" }}
            >{props.ligado ? "Ligado" : "Desligado"}
            </button>
        </div>
    );
}

// 2) Copie o código acima. Mas agora, o componente não deve gerenciar seu próprio estado. Ele deve receber duas props: um evento de clique e uma propriedade booleana que indica se está ligado ou não. O useState deve estar na página principal.