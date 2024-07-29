// Recursion
// 1.Addition of first n natural numbers

function addition(n) {
  // time complexity(O(n)), space com (O(n))
  // Base case
  if (n == 1) {
    return 1;
  } else {
    // Recursive case
    return n + addition(n - 1);
  }
}
// 10 + name(9)=> 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 => name(10)
// 9 + name(8) => 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 => name(9)
// 8 + name(7) => 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 => name(8)
// 7 + name(6) => 7 + 6 + 5 + 4 + 3 + 2 + 1 => name(7)
// 6 + name(5) => 6 + 5 + 4 + 3 + 2 + 1 => name(6)
// 5 + name(4) => 5 + 4 + 3 + 2 + 1 => name(5)
// 4 + name(3) => 4 + 3 + 2 + 1 => name (4)
// 3 + name(2) => 3 + 2 + 1 => name(3)
// 2 + name(1) => 2+1 => name(2)
// 1=> name(1) => name(1)

console.log(addition(5));

// --Same question using for loop iteration
// time (O(n)) , space (O(1))
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);

// 2. Factorial
// 0! => 1 (Factorial of 0 is 1)

function factorial(n) {
  if (n < 0) {
    return 0;
  }
  // Base case
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }

  /*
  call 1 : f(5)
    return 5*f(4) (5*4*3*2*1)
  call 2 : f(4)
    return 4*f(3) (4*3*2*1*1)
  call 3 : f(3)
    return 3*f(2) (3*2*1*1)
  call 4 : f(2)
    return 2*f(1) (2*1*1)
  call 5 f(1)
    return 1*f(0) (1*1)
  call 6 f(0)
    return 1
  */
}

console.log(factorial(5));

// 3. Fibonacci Series
function fibonacci(n) {
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(5));
