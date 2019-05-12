function bubbleSort(array) {
    for (let i = 0; i < array.length; i++ ) {
      let swapped = true
      while (swapped) {
        for (let i = 0; i < array.length; i++ ) {
          if (array[i + 1] && (array[i] > array[i + 1])) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
          } else {
            swapped = false
          }
        }
      }
    }
    return array;
}
