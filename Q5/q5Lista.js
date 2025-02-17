const usuarios = []

export function adicionarUsuario(nome, email, senha) {
    const usuario = { nome, email, senha }
    usuarios.push(usuario)
    console.log(`Usuário ${nome} adicionado com sucesso.`)
}

export function removerUsuario(email) {
    const index = usuarios.findIndex(usuario => usuario.email === email)
    if (index !== -1) {
        usuarios.splice(index, 1)
        console.log(`Usuário com e-mail ${email} removido com sucesso.`)
    } else {
        console.log(`Usuário com e-mail ${email} não encontrado.`)
    }
}

export function atualizarUsuario(email, novosDados) {
    const usuario = usuarios.find(usuario => usuario.email === email)
    if (usuario) {
        Object.assign(usuario, novosDados);
        console.log(`Usuário com e-mail ${email} atualizado com sucesso.`)
    } else {
        console.log(`Usuário com e-mail ${email} não encontrado.`)
    }
}

export function listarUsuarios() {
    return usuarios;
}