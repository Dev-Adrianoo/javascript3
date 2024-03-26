// Muito Útil quando sua variável possui valores específicos 

const permissoes = "aluno" //aluno || 'professor' || 'admin'

switch(permissoes) {
    case 'aluno':
        console.log('Você só pode visualizar as aulas.');
        break
    case 'professor':
        console.log('Você pode alterar as aulas e adicionar exércicios');
        break
    case 'admin':
        console.log('Você pode fazer tudo no sistema!');
        break
    default :
    console.log('NÃO SEI QUEM VOCÊ É... SE INDENTIFIQUE OU CHAMAREMOS A POLICIA!');
    break
}   