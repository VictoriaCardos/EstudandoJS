/*
Implemente os métodos abaixo:
1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
 */

function createArray(number,char){
  var arr = [];
  for (var i=0; i<number; i++){
    arr.push(char);
  }
  return arr;
}

console.log(createArray(3,'a'))

//2) Implemente um método que inverta um array, não utilize métodos nativos do array.

function reverseArray(arr){
  var newArr = []

  while(arr.length > 0){
    newArr.push(arr.pop())
  }
  return newArr;
}

console.log(reverseArray([1,2,3,4]))

//3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).

var clearArray = function clearArray(arr){
  var newArr = []

  arr.filter(function(item){
    !!item ? newArr.push(item) : '';
  });

  return newArr;
};
console.log(clearArray([1,2,'', undefined]))

//4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
var convertArray = function convertArray(arr){
  var newObj = Object.fromEntries(arr)
  return newObj;
};
console.log(convertArray([["c",2],["d",4]]))

//5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.

var filterArr = function filterArr(arr, param1, param2){
  newArr = arr.filter(function(item){
    return item != param1 && item != param2
  });

  return newArr;
};
console.log(filterArr([5,4,3,2,5], 5,3))

//6) Implemente um método que retorne um array, sem valores duplicados.

var filterDuplicateArr = function filterDuplicateArr(arr){
  newArr = arr.map(function(item){
    
  });

  return newArr;
};
console.log(filterDuplicateArr([1,2,3,3,2,4,5,4,7,3]))
// em construção 

