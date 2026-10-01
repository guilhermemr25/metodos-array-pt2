const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const produtoComPrecoSuperior = produtos.some((produto) => produto.preco > 3000);

console.log("Existe pelo menos um produto com preço superior a 3000?", produtoComPrecoSuperior);