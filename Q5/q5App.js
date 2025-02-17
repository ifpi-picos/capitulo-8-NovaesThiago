import { adicionarUsuario, removerUsuario, atualizarUsuario, listarUsuarios } from './q5Lista'

adicionarUsuario('Lucas', 'lucas@example.com', 'senha123')
adicionarUsuario('Andre', 'andre@example.com', 'senha456')

console.log('Usuários:', listarUsuarios())

atualizarUsuario('lucas@example.com', { senha: 'novaSenha123' })

removerUsuario('andre@example.com')

console.log('Usuários após remoção:', listarUsuarios())