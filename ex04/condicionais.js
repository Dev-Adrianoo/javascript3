const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual e a sua idade?'));

const eMaiorDeIdade = idade >=18;

// Estrutura condicional: if/else 

if (eMaiorDeIdade) {
    // faça alguma coisa...
    console.log('Vocé e maior de idade!')
} else {
    console.log('Você e menor de idade!')
}

const mediaNota = Number(prompt.question('Digite sua nota: '))

if (mediaNota >=7) {
    console.log('Você foi Aprovado! 🥳🥳🥳🥳');
} else if (mediaNota >=5) {
    console.log('Prova final. 😨😨😨😨');
} else {
    console.log('Reprovado! 😪😪😪')
}

const idadeDoUsuario = 18;
const temCNH = true;

if (idadeDoUsuario >=18 && temCNH) {
    console.log('Você pode Dirigir.')
} else {
    console.log('Você NÃO pode dirigir.')
}