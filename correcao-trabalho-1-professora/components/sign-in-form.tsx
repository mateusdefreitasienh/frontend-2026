import Button from "./button";
import Input from "./input";

export default function SignInForm() {
  return (
    <div className="flex flex-col gap-2 max-w-96 p-3 m-3 rounded-lg shadow-xl shadow-gray-400">
      <div className="flex flex-col">
        <Input placeholder="Celular" />
        <span className="text-gray-600 text-sm ml-2 mt-1">Error goes here</span>
      </div>
      <Button>Entrar</Button>
      <Button className="bg-blue-700 hover:bg-blue-900 text-white border-none">
        Criar conta
      </Button>
      <span>
        Esqueceu sua senha?{" "}
        <a href="https://youtube.com" className="text-blue-700 hover:underline">
          Recuperar agora
        </a>
      </span>
    </div>
  );
}
