function isPowerOfTwo(n) {
    let isPowerOfTwo = true

    if (n % 2 !== 0) return false

    const getPowerOfTwo = () => {
        if (n === 0) return `True is 2**${n}`
        for (let i = 0; i <= (n / 2); i++) {
            if (2 ** i === n) return `True is 2**${i}`
        }

        return `False`
    }

    return getPowerOfTwo()
}

console.clear()
console.log(`5 is power of 2 ${isPowerOfTwo(5)}`)
console.log(`0 is power of 2 ${isPowerOfTwo(0)}`)
console.log(`2 is power of 2 ${isPowerOfTwo(2)}`)
console.log(`4 is power of 2 ${isPowerOfTwo(4)}`)
console.log(`8 is power of 2 ${isPowerOfTwo(8)}`)
console.log(`16 is power of 2 ${isPowerOfTwo(16)}`)
console.log(`32 is power of 2 ${isPowerOfTwo(32)}`)
console.log(`64 is power of 2 ${isPowerOfTwo(64)}`)
console.log(`128 is power of 2 ${isPowerOfTwo(128)}`)
console.log(`500000 is power of 2 ${isPowerOfTwo(500000)}`)
