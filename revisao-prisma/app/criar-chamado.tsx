"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { criarChamado } from "./chamados-crud";

// export function CreateChamadoForm() {
//   const router = useRouter();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   async function onSubmitNotepad(event) {
//     event.preventDefault();
//     const resultado = await createNotepad(title, description);
//     if (resultado.sucesso) {
//       toast.success(resultado.mensagem);
//       setTitle("");
//       setDescription("");
//       router.push("/");
//     } else {
//       toast.error(resultado.mensagem);
//     }
//   }

export function CriarChamadoForm() {
    const router = useRouter();
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [solicitante, setSolicitante] = useState("");

    async function onSubmitChamados(event) {
        event.preventDefault();
        const resultado = await criarChamado(titulo, descricao, solicitante);
        // if (resultado.sucesso) {
        //   toast.success(resultado.mensagem);
        //   setTitle("");
        //   setDescription("");
        //   router.push("/");
        // } else {
        //   toast.error(resultado.mensagem);
        // }
    }

    return (
        <form
            onSubmit={onSubmitChamados}
            className="flex flex-col gap-4 max-w-78 p-4"
        >
            <h1 className="text-center font-bold text-xl">Criar chamado</h1>
            <input
                className="border-gray-400 border-2 p-2 rounded-lg"
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
            />
            <textarea
                className="border-gray-400 border-2 p-2 rounded-lg"
                placeholder="Descrição"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
            ></textarea>
            <textarea
                className="border-gray-400 border-2 p-2 rounded-lg"
                placeholder="Descrição"
                value={solicitante}
                onChange={(event) => setSolicitante(event.target.value)}
            ></textarea>
            <button
                className="border-gray-400 border-2 p-2 rounded-lg hover:cursor-pointer hover:bg-cyan-900"
                type="submit"
            >
                Enviar
            </button>
        </form>
    );
}
