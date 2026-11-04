"use server";

import { prisma } from "@/lib/prisma";

// Lista todas as anotações
export async function listNotepads() {
  return prisma.notepad.findMany();
}

// Devolve uma anotação pelo id
export async function getNotepadById(id: number) {
  const notepad = await prisma.notepad.findFirstOrThrow({
    where: {
      id,
    },
  });

  return notepad;
}

// Cria uma nova anotação
export async function createNotepad(title: string, description: string) {
  if (title.length < 4) {
    return {
      sucesso: false,
      mensagem: "O título precisa ter pelo menos 4 caracteres.",
    };
  } else if (title.length > 64) {
    return {
      sucesso: false,
      mensagem: "O título só pode ter até 64 caracteres.",
    };
  } else if (description.length < 8) {
    return {
      sucesso: false,
      mensagem: "A descrição precisa ter pelo menos 8 caracteres.",
    };
  } else if (description.length > 256) {
    return {
      sucesso: false,
      mensagem: "A descrição só pode ter até 256 caracteres.",
    };
  }

  await prisma.notepad.create({
    data: {
      title,
      description,
    },
  });

  return {
    sucesso: true,
    mensagem: "Anotação criada com sucesso!",
  };
}

// Edita uma anotação pelo id
export async function editNotepad(
  id: number,
  title: string,
  description: string,
) {
  if (title.length < 4) {
    return {
      sucesso: false,
      mensagem: "O título precisa ter pelo menos 4 caracteres.",
    };
  } else if (title.length > 64) {
    return {
      sucesso: false,
      mensagem: "O título só pode ter até 64 caracteres.",
    };
  } else if (description.length < 8) {
    return {
      sucesso: false,
      mensagem: "A descrição precisa ter pelo menos 8 caracteres.",
    };
  } else if (description.length > 256) {
    return {
      sucesso: false,
      mensagem: "A descrição só pode ter até 256 caracteres.",
    };
  }

  await prisma.notepad.update({
    data: { title, description },
    where: { id },
  });

  return {
    sucesso: true,
    mensagem: "Anotação atualizada com sucesso!",
  };
}

// Deleta uma anotação pelo id
export async function deleteNotepad(id: number) {
  await prisma.notepad.delete({
    where: { id },
  });

  return {
    sucesso: true,
    mensagem: "A anotação foi deletada com sucesso!",
  };
}
