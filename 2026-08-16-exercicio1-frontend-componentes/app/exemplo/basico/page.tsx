import Button from "@/components/button"
import Input from "@/components/input"
import TitleDescription from "@/components/TitleDescription";

export default function Home() {

    return (
        <div>
            <TitleDescription title="Titulo aqui"description="Descrição aqui" />
            <Button cor="white" corText="blue" corBorda="blue"> Um Botão</Button>
            <Input />
        </div>
    );


}