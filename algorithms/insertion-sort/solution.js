function insertionSort(array) {
  const n = array.length;
  for (let i = 1; i <= n - 1; i++) {
    let j = i; // current element's Index
    while (array[j] < array[j - 1] && j > 0) {
      const temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j -= 1;
    }
  }
  console.log(array);
  return array;
}
insertionSort([5, 3, 6, 1]);
