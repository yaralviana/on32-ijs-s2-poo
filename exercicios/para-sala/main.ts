import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { Produto } from "./produtos/produto"

const produto = new Produto("Regata", 100, "descricao regata M")

const produtoObject: ProdutoInterface = {
nome: "produto obj",
descricao: "",
preco: 0
}

const display = (...produtos: ProdutoInterface[]): void => {
console.table(produtos)
}

display(produto, produtoObject)