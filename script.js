const prompt = require('readline-sync');

const idade = prompt.question('Qual e sua idade? '); 

const idadeNumber = Number(idade)

console.log(idadeNumber , typeof(idadeNumber))

//Coerção explícita (Conversão manual)

 console.log(Number("x")); //NAN: not a number

 console.log(String(10), typeof String(10));

 console.log(Boolean(0));

 //Coerção implícita 
 console.log(1 + "1");
 console.log(10 - "5");
console.log("10" + 5);
