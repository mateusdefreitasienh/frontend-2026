import Input from "@/components/input"
import Button from "@/components/button"

export default function Singinform() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Input placeholder="Celular" />
                <p style={{ margin: "0", color: "gray", marginLeft:"12px" }}>Error goes here</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <Button cor="white" corText="blue" corBorda="blue">Entrar</Button>
                <Button cor="blue" corText="white" corBorda="blue">Criar Conta</Button>
                <div style={{display:"flex", gap:"12px"}}>
                    <p style={{ fontSize: "1.2rem",margin: "0",marginLeft:"12px" }}>Esqueceu sua senha?</p> <a href="" style={{ fontSize: "1.2rem", color: "blue" }}>Recupere agora</a>
                </div>

            </div>
        </div>
    );

}