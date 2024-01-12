// Escopo global - pouco usado;
var a = 'a';
// Escopo local - pode alterar;
let b: string = 'b';
let n: number = 2;
let x: boolean = true;
let m: string | number = 'dois'
m = 2;

//evitar usar
let qualquerTipo: any = 'true';
// Não é possivel sobrescrever - é uma constante (imutável);
const c = 'c';

// Tipos primitivos

// string
// number
// boolean

//Objetos
interface Pessoa {
  nome: string,
  idade: number,
  profissao?: string
};

const pessoa: Pessoa = {
  nome: 'Igor',
  idade: 35
}

const outraPessoa: Pessoa = {
  nome: 'Paulo',
  idade: 25,
  profissao: 'Desenvolvedor'
}

const arrayPessoa: Pessoa[] = [
  pessoa,
  outraPessoa
]

const arrayPessoa2: Array<Pessoa> = [
  pessoa,
  outraPessoa
]

//Estrutura de decisão
const num: number = 16;

if (num > 15) {
  console.log("Número é maior que 15");
} else {
  console.log("Número é menor que 15");
}

//objeto literal
const typeUser = {
  admin: "Seja bem vindo admin",
  student: "Você é um estudante",
  viewer: "Você pode apenas visualizar"
}

function validateUser(user: string) {
  console.log(typeUser[user as keyof typeof typeUser]);
}

let user = 'admin';

validateUser(user);
validateUser('student');
user = 'viewer';
validateUser(user);

//for
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}

// while
let numbr = 2;
while (numbr < 6) {
  console.log('Número do while:', numbr)
  numbr++;
};




