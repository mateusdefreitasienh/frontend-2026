"use server";

export async function loginNoServer(usuario: string, senha: string) {
    if (usuario === 'admin' && senha === 'admin') {
        return "Login com sucesso!";
    } else {
        return "Usuario ou senha invalidos!";
    }
}