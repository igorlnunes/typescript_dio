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

let user1 = 'admin';

validateUser(user1);
validateUser('student');
user1 = 'viewer';
validateUser(user1);

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

// Manipulando arrays
const array: Array<number> = [1, 2, 3, 4];

const stringArray: string[] = ['1', 'struct', 'três'];

const buscaNumberArray = array.find(num => num === 2);

console.log("Número encontrado: ", buscaNumberArray);

array.forEach(num => {
  if (num * 2 && num % 2 == 0) {
    console.log("Cada elemento: ", num);
  }
}
);

// Classes
class User {
  name: string;
  age: number;

  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
  }

  showName = () => {
    console.log("Este é o nome do usuário:", this.name);
    if (this.age > 18) {
      console.log("Usuário %s tem %s e está apto a se alistar no exército!", this.name, this.age);
    } else {
      console.log("Este usuário não pode se alistar, tente daqui a %s anos", (18 - this.age));
    }
  }
}

const user: User = new User('Joel', 8);
user.showName();




