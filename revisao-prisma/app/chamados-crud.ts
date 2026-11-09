"use server"

import { prisma } from "../lib/prisma";

export async function listarTodosChamados() {
    return prisma.chamados.findMany();
}

export async function criarChamado(titulo:string, descricao: string, solicitante: string) {
    await prisma.chamados.create({
        data: {
            titulo,
            descricao,
            solicitante
        }
    });
}