import { listarTodosChamados } from "./chamados-crud";
import { CriarChamadoForm } from "./criar-chamado";

export default async function Home() {

  const chamados = await listarTodosChamados();

  return (
    <div>
      <ul>
        {chamados.map((c) => (
          <li key={c.id}>{c.titulo}</li>
        ))}
      </ul>

        <br /><br />
        <CriarChamadoForm></CriarChamadoForm>

    </div>
  );
}
