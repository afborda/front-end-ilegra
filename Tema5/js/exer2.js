/* Converta o código abaixo para ES6
        concatenação de string - templatestring
        const e let
        shorthand param
        default param
        arrow function
        classes
        function dentro de variável
        etc...
    */
function buscaArquivoNoSistema(nomeArquivo) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(`buscou o arquivo + ${nomeArquivo}`);
      resolve(nomeArquivo);
    }, 300);
  });
}

function salvaArquivoNoServidor(urlServico, arquivo) {
  urlServico = urlServico || "www.api.com";
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (!arquivo) return reject("arquivo não existe");
      console.log("salvou no servidor" + urlServico);

      resolve(urlServico);
    }, 300);
  });
}

var somaMultiplosNumeros = function(...numerosArray) {
  return numerosArray.reduce(function(acumulador, numeroAtual) {
    return acumulador + numeroAtual;
  });
};

// chama os serviços de buscar arquivo e salva no servidor
function handlerArquivo() {
  buscaArquivoNoSistema("teste1", function(err, arquivo) {
    if (!err)
      salvaArquivoNoServidor("www.google.com", arquivo, function(err, sucesso) {
        if (!err) {
          console.log(sucesso);
        }
      });
  });
}
var name = "marcelo";
var father = {
  name,
  friendsFather: ["João", "Maria"],
  olaAmigos: function() {
    this.friendsFather.map(function(value) {
      console.log(this.name + " conhece " + value);
    });
  }
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
