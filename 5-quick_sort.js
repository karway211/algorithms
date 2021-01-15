// быстрая сортировка или сортировка Хоара
// самый эффективный алгоритм сортировки
// O(log2n*n);

const arr = [6, 5, 7, 4, 10, 3, 9, 2, 0, 1, 10, 14, 13, 12, 11, -5, -3, -1, 6, 5, 7, 4, 10, 3, 9, 2, 0, 1, 10, 14, 13, 12, 11, -5, -3, -1];

let count = 0;

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2); // индекс опорного элемента
  let pivot = array[pivotIndex]; // сам опорный элемент
  let less = []; // сохраняем числа кот меньше опорного
  let greater = []; // сохраняем числа кот юольше опорного
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log(arr.length);
console.log('count:', count);
