// один из самых известных и неэффективных алгоритмов сортировки

const arr = [6, 5, 7, 4, 10, 3, 9, 2, 0, 1, 10, 14, 13, 12, 11, -5, -3, -1, 6, 5, 7, 4, 10, 3, 9, 2, 0, 1, 10, 14, 13, 12, 11, -5, -3, -1];

let count = 0;

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

console.log(bubbleSort(arr));
console.log(arr.length);
console.log('count:', count);

// O(n**2) но без коэффициента 1/2, т.е. этот алг-м менее эффективен, чем алг-м сортировки поиском
