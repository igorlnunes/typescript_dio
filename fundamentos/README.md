# TypeScript - Fundamentos

## Aula 01 - Introdução e Configuração Inicial

### O que é TypeScript?

**TypeScript** é uma linguagem de programação que estende o JavaScript, adicionando tipagem estática opcional. Isso significa que você pode adicionar tipos às suas variáveis, parâmetros de função e outros elementos do código, proporcionando uma experiência de desenvolvimento mais robusta e prevenindo erros comuns.

### Instalação e Configuração Inicial

Para começar a utilizar o TypeScript em seu projeto, siga os seguintes passos:

1. Inicie o Node.js em seu projeto:

    ```bash
    npm init --y
    ```

2. Instale a dependência do TypeScript:

    ```bash
    npm i -D typescript
    ```

3. Instale a dependência do `ts-node-dev` para facilitar o desenvolvimento:

    ```bash
    npm i -D ts-node-dev
    ```

4. Inicialize o TypeScript em seu projeto:

    ```bash
    npx tsc --init
    ```

### Transpilação de Código TypeScript

Para transpilar um arquivo TypeScript para JavaScript, utilize o seguinte comando:

```bash
npx tsc nomeDoArquivoASerTranspilado.ts
```

## Aula 02 - Fundamentos e Sintaxe

### Declaração de Variáveis

```typescript
// Declaração de variáveis
let nome: string = 'John';
let idade: number = 30;
let isAdmin: boolean = true;
```

### Objetos e Interfaces

```typescript
// Objeto literal
const typeUser = {
  admin: "Seja bem-vindo admin",
  student: "Você é um estudante",
  viewer: "Você pode apenas visualizar"
};

// Interface
interface UserType {
  admin: string;
  student: string;
  viewer: string;
}

function validateUser(user: keyof UserType) {
  console.log(typeUser[user]);
}

let user: keyof UserType = 'admin';

validateUser(user);
validateUser('student');
user = 'viewer';
validateUser(user);
```

### Estruturas de Repetição

```typescript
// Exemplo de estrutura de repetição
for (let i = 0; i < 5; i++) {
  console.log(`Número: ${i}`);
}

// Estrutura de repetição usando array
const colors: string[] = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(`Cor: ${color}`);
}
```

**Lembre-se de praticar e explorar mais sobre os fundamentos do TypeScript. Continue acompanhando as aulas para aprofundar seus conhecimentos!** 🚀