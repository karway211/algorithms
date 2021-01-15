// сортировка выбором

const arr = [6, 5, 7, 4, 8, 3, 9, 2, 0, 1, 10, 14, 13, 12, 11, -5, -3, -1];

let count = 0;

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(arr));
console.log(arr.length);
console.log('count:', count);

// получается сложность O(1/2*n**2)
// но коэф-ты типа 1/2 в оценке сложности не указываются, поэтому O(n**2)
