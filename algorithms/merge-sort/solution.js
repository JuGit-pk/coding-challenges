function merge(array, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (array[left] <= array[right]) {
      temp.push(array[left]);
      left++;
    } else {
      temp.push(array[right]);
      right++;
    }
  }
  // if any part of the array is left behind
  while (left <= mid) {
    temp.push(array[left]);
    left++;
  }
  while (right <= high) {
    temp.push(array[right]);
    right++;
  }

  // Copy the sorted elements from temp back to the original array
  for (let i = 0; i < temp.length; i++) {
    array[low + i] = temp[i];
  }
}

function mergeSort(array, low, high) {
  if (low >= high) return;

  const mid = Math.floor((low + high) / 2);
  // console.log({
  // mid,
  // left: array.slice(low, mid + 1),
  // right: array.slice(mid + 1, high + 1)
  // })

  // left half
  mergeSort(array, low, mid);
  // right half
  mergeSort(array, mid + 1, high);
  // console.log("------merging------")
  merge(array, low, mid, high);

  // console.log({
  // mid,
  // left: array.slice(low, mid + 1),
  // right: array.slice(mid + 1, high + 1)
  // })

  console.log(array);
  return array;
}
const arr = [70, 50, 30, 10, 20, 40, 60];
mergeSort(arr, 0, arr.length - 1);
