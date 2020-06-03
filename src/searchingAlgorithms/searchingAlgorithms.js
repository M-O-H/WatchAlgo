//* LINEAR SEARCH
export function getLinearSearchAnimations(array, find) {
    const animations = []
    console.log('Reached the linear search!');
    if (array.length <= 1) return array;
    for (let i = 0; i < array.length; i++) {
        animations.push([i, array[i]])
        animations.push([i, array[i]])
        if (array[i] === find) {
            console.log('100 found!')
            animations.push([i, array[i]]);
            return animations;
        }
    }
    console.log('100 NOT found!')
    return animations;
}
//* LINEAR SEARCH DONE

//* BINARY SEARCH
export function getSortedAnimations(array, find) {
    const animations = []
    console.log('Reached the Binary search!');
    //sort the array first
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    for (let i = 0; i < javaScriptSortedArray.length; i++) {
        animations.push([i, javaScriptSortedArray[i]])
    }
    return animations;
}
export function getBinarySearchAnimations(array, find) {
    const animations = []
    console.log('Reached the Binary search!');
    //sort the array first
    const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
    return animations;
}
  //* BINARY SEARCH DONE