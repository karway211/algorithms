const factorial = (n) => {
  if (n === 1) { // factorial от 1 === 1
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(8));

// Числа Фибоначи - 1,1,2,3,5,8,13,21 (каждое последующее число = сумме 2-х пердыдущих)

const fibonachi = n => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(8));
