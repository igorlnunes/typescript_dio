const array: Array<number> = [1, 2, 3, 4];

// const stringArray: string[] = ['1', 'struct', 'três'];

// const buscaNumberArray = array.find(num => num === 2);

// console.log("Número encontrado: ", buscaNumberArray);

array.forEach(num => {
  if (num * 2 && num % 2 == 0) {
    console.log("Cada elemento: ", num);
  }
}
);