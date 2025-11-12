// 1. Criando um objeto simples
// Crie um objeto chamado pessoa com as propriedades nome, idade e cidade.
// Depois, exiba todas as informações no console.

let pessoa ={
nome: "vini",
idade: 16,
cidade: "santa cruz"
};
console.log (pessoa.nome, pessoa.idade, pessoa.cidade);

// 2. Atualizando informações
// Usando o objeto pessoa do exercício anterior:
// Altere a cidade para “Santa Cruz do Sul RS”.
// Adicione uma nova propriedade chamada profissao.
// Mostre o resultado final no console.

pessoa.cidade = "Santa Cruz do Sul RS"
pessoa.profissao = "engenheiro"
console.log(pessoa.nome, pessoa.idade, pessoa.cidade, pessoa.profissao);

// 3. Objeto com função
// Crie um objeto carro com as propriedades marca, modelo, ano e uma função ligar() que mostre no console:
// “O carro [marca] [modelo] foi ligado!”
// Execute o método.

let carro ={
    marca: "porsche",
    modelo: "911",
    ano: 2019,

    ligar:function() {
        console.log("o carro " + this.marca + " " + this.modelo + " foi ligado");

    }
}
carro.ligar();