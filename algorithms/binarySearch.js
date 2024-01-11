
function binarySearch(arr, target) {
    const notFound = -1
    let end = arr.length

    for (let init = 0; init < end; init) {
        const middleOfTheArray = Math.round((end - init) / 2) + init

        if (arr[middleOfTheArray] === target) return middleOfTheArray
        if (arr[init] === target) return init
        if (end - init <= 2) return notFound

        if (arr[middleOfTheArray] < target) {
            init = middleOfTheArray
        } else {
            end = middleOfTheArray
        }
    }

    return notFound
}

const orderedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.clear()
console.log(`The index of 2 is ${binarySearch(orderedArr, 2)}`)
console.log(`The index of 7 is ${binarySearch(orderedArr, 7)}`)
console.log(`The index of 9 is ${binarySearch(orderedArr, 9)}`)
console.log(`The index of 1 is ${binarySearch(orderedArr, 1)}`)
console.log(`The index of 11 is ${binarySearch(orderedArr, 11)}`)
console.log(`The index of 0 is ${binarySearch(orderedArr, 0)}`)
console.log(`The index of 12 is ${binarySearch(orderedArr, 12)}`)





