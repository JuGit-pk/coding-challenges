function selectionSort(array) {
  // select minimum and swap with the current indexed element

  // first select the current element
  // then search the minimum in the remaining list and swap with the current
  const n = array.length;
  for (let i = 0; i <= n - 2; i++) {
    // for current element selection
    let minIndex = i; // index of the minimum element
    for (let j = i; j <= n - 1; j++) {
      // for finding minimum
      if (array[j] < array[minIndex]) {
        minIndex = j; // assigning minimum element
      }
    }
    // now we have min value, so replace it
    // swapping the same array instead of creating new array
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  console.log(array);
  return array;
}

selectionSort([9, 2, 6, 4, 3, 6, 0, 8]);
