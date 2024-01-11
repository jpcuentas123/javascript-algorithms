function insertionSort(arr) {
    const sortedArr = [arr[0]]
    const unsortedArr = arr.slice(1)
    const unsortedArrLength = unsortedArr.length

    const sortUnsortedValue = (unsortedValue) => {
        let sorting = true
        let sortingIndex = sortedArr.length - 1

        while (sorting) {

            const sortedValue = sortedArr[sortingIndex]

            if (sortedValue < unsortedValue) {
                sortedArr[sortingIndex + 1] = unsortedValue
                sorting = false
                return
            }

            sortedArr[sortingIndex + 1] = sortedValue

            if (sortingIndex === 0) {
                sortedArr[0] = unsortedValue
                sorting = false
            }

            sortedArr[sortingIndex + 1] = sortedValue
            sortingIndex = sortingIndex - 1

        }
    }



    for (let unsortedI = 0; unsortedI < unsortedArrLength; unsortedI++) {
        const unsortedValue = unsortedArr.shift()

        sortUnsortedValue(unsortedValue)

    }

    return sortedArr
}


const unsortedArr = [-6, 20, 8, -2, 4]

// Big-O O(n^2)
console.clear()
console.log(`Sorted array is equal to ${insertionSort(unsortedArr)}`) // [-6, -2, 4, 8, 20]