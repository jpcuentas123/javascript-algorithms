function quickSort(arr) {
  const sortedArr = [];

  const quickSorting = (arrSorting) => {
    const pivot = arrSorting[arrSorting.length - 1];
    const smallerArr = [];
    const greaterArr = [];

    if (arrSorting.length === 0) return [];

    for (let i = 0; i < arrSorting.length - 1; i++) {
      const currentValue = arrSorting[i];
      if (currentValue <= pivot) {
        smallerArr.push(currentValue);
      } else {
        greaterArr.push(currentValue);
      }
    }

    if (smallerArr.length === 1 || greaterArr.length === 1) {
      return [...smallerArr, pivot, ...greaterArr];
    }

    return [...quickSorting(smallerArr), pivot, ...quickSorting(greaterArr)];
  };

  return quickSorting(arr);
}

const unsortedArr = [-6, 20, 8, -2, 4, 4];

// Big-O O(n^2)
// Big-Θ Θ(nlogn)
console.clear();
console.log(`Sorted array is equal to ${quickSort(unsortedArr)}`); // [-6, -2, 4, 8, 20]
