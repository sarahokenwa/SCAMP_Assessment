//fib = fibonacci, num = number.
//The recursive operation was used for the solving.

function fib(num) {
  if (num <= 1) {
    return num;
  } else {
    return fib(num - 1) + fib(num - 2);
  }
}
console.log(fib(10));
