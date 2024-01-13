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
# TypeScript - Fundamentos de Programação Orientada a Objetos (POO)

## Conceitos Principais da Programação Orientada a Objetos (POO)

A Programação Orientada a Objetos (POO) é um paradigma de programação que organiza o código em torno de objetos, que podem conter atributos e métodos. Aqui estão alguns dos conceitos principais:

### 1. Objetos, Atributos e Métodos

Na POO, um **objeto** é uma instância de uma **classe** que contém **atributos** (dados) e **métodos** (funções). Cada objeto representa uma entidade do mundo real e encapsula suas características e comportamentos.

### 2. Classe

Uma **classe** é uma estrutura que define um tipo de objeto. Ela serve como um modelo para a criação de instâncias (objetos). A **classe** é uma forma de organizar e abstrair o código, facilitando a criação e manutenção de objetos.

### 3. Abstração

**Abstração** é a capacidade de pensar no objeto certo e compreender a regra de negócio. É o processo de simplificar complexidades, destacando apenas as informações essenciais do objeto.

### 4. Herança

**Herança** é um conceito em que uma classe (chamada de classe filha) herda características e comportamentos de outra classe (classe pai). Isso promove a reutilização de código e ajuda a organizar a hierarquia de classes.

### 5. Polimorfismo

**Polimorfismo** permite que objetos de diferentes classes sejam tratados de maneira uniforme. Isso ocorre quando uma classe filha implementa um método com a mesma assinatura da classe pai, mas com implementação diferente.

## TypeScript e POO

Dentro do TypeScript, temos algumas características importantes relacionadas à POO:

- **Modificadores de Acesso (Access Modifiers):**
  - `private`: Acesso restrito apenas à própria classe.
  - `public`: Acesso permitido de qualquer lugar.
  - `protected`: Acesso permitido dentro da própria classe e suas subclasses.

- **`readonly`:**
  - Indica que uma propriedade só pode ser lida durante a execução, mas não pode ser modificada.

- **`void`:**
  - Usado para indicar que uma função não retorna nenhum valor.

Estes conceitos são fundamentais para a construção de programas orientados a objetos eficientes e modularizados em TypeScript. Explore esses conceitos na prática para aprimorar seu entendimento e habilidades! 🚀