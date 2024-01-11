function Fibonacci(n) {
    const fibonacciList = []

    const getFibonacciNumber = (index) => {
        if (index <= 1) {
            return index
        }
        return fibonacciList[index - 2] + fibonacciList[index - 1]
    }

    for (let index = 0; index < n; index++) {
        const value = getFibonacciNumber(index)

        fibonacciList[index] = value
    }


    return fibonacciList
}

console.clear()
console.log(`Fibonacci of 2 is: ${Fibonacci(2)}`)
console.log(`Fibonacci of 3 is: ${Fibonacci(3)}`)
console.log(`Fibonacci of 7 is: ${Fibonacci(7)}`)
console.log(`Fibonacci of 7 is: ${Fibonacci(20)}`)

