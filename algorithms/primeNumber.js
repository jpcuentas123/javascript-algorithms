function isPrimeNumber(n) {


    const getIsPrime = () => {
        if (n < 2) return false

        for (let i = 2; i < n; i++) {
            if (n % i === 0) return false
        }

        return true
    }

    return getIsPrime()
}


const primes = [...Array(200)].map((value, index) => index)

primes.forEach((value) => console.log(`${value} is prime: `, isPrimeNumber(value)))
