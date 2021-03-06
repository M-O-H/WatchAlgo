//* MERGE SORT

export function getMergeSortAnimations(array) {
  // animations is an empty array.
  const animations = [];
  if (array.length <= 1) return array;
  // slice() with no arguments make the cpoy of the array.
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  // animations now is a sorted array.
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  // Base condition of recursion
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
//* MERGE SORT DONE

//* BUBBLE SORT
export function getBubbleSortAnimations(array) {
  const animations = []

  if (array.length <= 1) return array;
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {

      if (array[i] > array[i + 1]) {
        animations.push([i, i + 1]);
        //animations.push([i, i + 1]);
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        animations.push([i, array[i]]);
        animations.push([i + 1, array[i + 1]]);
      }
    }
  }
  console.log('the sorted array is:')
  console.log(array);
  return animations;
}
//* BUBBLE SORT DONE

//* INSERTION SORT 
export function getInsertionSortAnimations(array) {
  const animations = []
  if (array.length <= 1) return array;
  let key = 0;
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    key = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > key) {
      animations.push([i, array[i]]);
      array[j + 1] = array[j];
      animations.push([j + 1, array[j + 1]]);
      j = j - 1;
    }
    array[j + 1] = key;
    animations.push([j + 1, key]);
    animations.push([i, array[i]]);
  }
  console.log('the sorted array is:')
  console.log(array);
  return animations;
}
//* INSERTION SORT DONE
