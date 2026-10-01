const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
  { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
  { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
  { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

const listarUsuarios = usuarios.map ((usuario) => {
    return {
        nome: usuario.nome,
        cargo: usuario.cargo
    }
});

const buscarUsuarioPorId = usuarios.find ((usuario) => usuario.id === 2);

const listarUsuariosAtivos = usuarios.filter ((usuario) => usuario.ativo);

const existeUsuarioInativo = usuarios.some ((usuario) => usuario.ativo);

const todosUsuariosMaioresDeIdade = usuarios.every ((usuario) => usuario.idade >= 18);

const calcularMediaIdade = usuarios.reduce ((soma, usuario) => soma + usuario.idade, 0) / usuarios.length;

console.log("Lista resumida:", listarUsuarios);
console.log("\nBuscar ID 2:", buscarUsuarioPorId);
console.log("\nAtivos:", listarUsuariosAtivos);
console.log("\nHá inativos?", existeUsuarioInativo);
console.log("\nTodos maiores de idade?", todosUsuariosMaioresDeIdade);
console.log("\nMédia de idade:", calcularMediaIdade);