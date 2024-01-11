function linearSearchOfANumber(arr, num) {
    const notFound = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i
    }

    return notFound
}

console.log(`The index of 10 is ${linearSearchOfANumber([0, 2, 10, 7], 10)}`)
console.log(`The index of 7 is ${linearSearchOfANumber([0, 2, 10, 7], 7)}`)
console.log(`The index of 4 is ${linearSearchOfANumber([0, 2, 10, 7], 4)}`)