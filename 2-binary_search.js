const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 13, 14, 16, 18, 20, 22];

let count = 0;

// с помощью цикла
// в данном случае 4 - это макс кол-во итераций за кот можно найти любое число в этом массиве
// сложность такого алгоритма O(log2n)
// в нашем случае 16 элементов log от 16 по основанию 2 = 4

const binarySearch = (array, item) => {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false; // будет отображать нащли эл-т в массиве или нет
  let position = -1; // если эл-т не был найден мы вернем -1
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

// с помощью рекурсии

const recursiveBinarySearch = (array, item, start, end) => {
  let middle = Math.floor((start + end) / 2);
  count += 1;
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, 0, middle - 1);
  }
  if (item > array[middle]) {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinarySearch(arr, 13, 0, arr.length));
console.log('count:', count);
