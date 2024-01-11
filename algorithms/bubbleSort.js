function bubbleSort(arr) {
    let swapped = false
    const sortedArr = arr

    const swapPositions = (currentValue, nextValue, currentIndex, arrToSwap) => {
        arrToSwap[currentIndex] = nextValue
        arrToSwap[currentIndex + 1] = currentValue
    }

    for (let i = 0; i < arr.length; i++) {

        const currentValue = sortedArr[i]
        const nextValue = sortedArr[i + 1]
        const needsToBeSwap = nextValue < currentValue
        if (needsToBeSwap) {
            swapPositions(currentValue, nextValue, i, sortedArr)
            swapped = true
        }

        if (i === (arr.length - 1) && swapped) {
            i = 0
            swapped = false
        }
    }

    return sortedArr
}


const unsortedArr = [-6, 20, 8, -2, 4]

console.clear()
console.log("Array sorted is: ", bubbleSort(unsortedArr))