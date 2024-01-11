const factorial = (n) => {
    let factorialOfn = 1

    const getFactorialOfn = (currentFactorial, nextFactorial) => {

        if (nextFactorial <= 0) return 1

        if (nextFactorial == 1) return currentFactorial

        return getFactorialOfn(currentFactorial * nextFactorial, nextFactorial - 1)
    }

    factorialOfn = getFactorialOfn(n, n - 1)

    return factorialOfn
}
// Big-O O(n)


console.log("short way", (function fac(n, x) { return x > 1 ? fac(n * x, x - 1) : n })(0, 0))
// Big-O O(n)

console.log("The factorial of 0 is ", factorial(0))
console.log("The factorial of 1 is ", factorial(1))
console.log("The factorial of 5 is ", factorial(5))