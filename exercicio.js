const Funcionarios = require('./Funcionarios.json')
// - 1º commit: Use o filter() para recuperar um array apenas com objetos da categoria 'gerente'
const buscaGerente = () => {
    return Funcionarios.filter(categoria => categoria.categoria === "gerente")
}
console.log(buscaGerente())

// - 2º commit: Use o reduce() para retornar o objeto com o menor id
// - 3º commit: Use o map() para colocar todos os nomes no formato UpperCase.