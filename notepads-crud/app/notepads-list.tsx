"use server";

import Link from "next/link";
import { listNotepads } from "./notepad-crud";

export async function NotepadsList() {
  const notepads = await listNotepads();

  const notepadsList = notepads.map((notepad) => (
    <Link href={`/editar-anotacao/${notepad.id}`} key={notepad.id}>
      <li className="border-b-2 border-b-gray-400 p-4">
        <span className="text-gray-400">#{notepad.id}</span>
        <h2 className="font-bold text-lg">{notepad.title}</h2>
        <p>{notepad.description}</p>
      </li>
    </Link>
  ));

  return <ul>{notepadsList}</ul>;
}
