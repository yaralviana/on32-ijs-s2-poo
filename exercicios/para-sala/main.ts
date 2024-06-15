import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { Produto } from "./produtos/produto"

const produto = new Produto("Gaveteira com rodinhas", 250, "Gaveteiro para escritório com 4 gavetas")

const produtoObject: ProdutoInterface = {
nome: "Cadeira de escritório",
descricao: "Assento estofado em PU oferece ergonomia e conforto",
preco: 468
}

const display = (...produtos: ProdutoInterface[]): void => {
console.table(produtos)
}

display(produto, produtoObject)