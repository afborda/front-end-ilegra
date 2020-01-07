class Produto {
  constructor(nome, tamanho, cor, preco, qtdEstoque) {
    this.nome = nome;
    (this.tamanho = tamanho), (this.cor = cor);
    this.preco = preco;
    this.qtdEstoque = qtdEstoque;
  }
  venda() {
    this.qtdEstoque -= 1;
  }

  static info(produto) {
    console.log(produto);
  }
}

const coca = new Produto("Coca-Cola", 30.0, "preto", 6.5, 50);

coca.venda();

Produto.info(coca);
