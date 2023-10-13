function bubbleSort(array) {
  const n = array.length;

  for (let i = 0; i <= n - 1; i++) {
    console.log("run");
    let isSwapped = false;
    // if the inner iteration is completed once and not swapped any, then break the outer loop
    for (let j = 0; j < n - i - 1; j++) {
      // swap
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  console.log(array);
  return array;
}

// bubbleSort([9, 2, 6, 4, 3, 6, 0, 8]);
// for checking the optimization
bubbleSort([0, 2, 3, 4, 6, 6, 8, 9]);
