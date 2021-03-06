import React from 'react';
import {
  getMergeSortAnimations,
  getBubbleSortAnimations,
  getInsertionSortAnimations
} from '../sortingAlgorithms/sortingAlgorithms.js';
import {
  getLinearSearchAnimations,
  getBinarySearchAnimations,
  getSortedAnimations
} from '../searchingAlgorithms/searchingAlgorithms.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 500;

// Change this value for the number of bars (value) in the array.
// TODO: Change this to make it user driven
// TODO: Insert a slider here.
const NUMBER_OF_ARRAY_BARS = 7;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 235));
    }
    console.log('Our array is:');
    console.log(array);
    this.setState({ array });
  }

  //* MergeSort Visualizer
  mergeSort() {
    // Inputting the array in the MergeSort Animations
    const animations = getMergeSortAnimations(this.state.array);
    // getMergeSortAnimations gives- us the sorted Array 'animations'
    console.log('The anmations item is: ')
    console.log(animations)

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      //TODO: Revert back to blue colour after
      //TODO: after sorting. i.e. only change the
      //TODO: isColorChange condition below.
      const isColorChange = i % 3 === 0;
      // To decide this condition, see the animated array
      // on when are the indices and when are the 
      // Array elements.
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    console.log('the animated array is:')
    console.log(animations)
    // TODO: Design Display logic
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }

  quickSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }



  //* BubbleSort Visualizer
  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    console.log('the animated array is:')
    console.log(animations)

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 === 0;
      //  isColorChange is false every 3rd iteration
      // i.e. 2, 5, 8,....
      // at every 0,1,3,4,6,7,9,...iterations, it is true
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  //* SEARCHING ALGOS.
  //* Linear Search
  linearSearch() {
    const animations = getLinearSearchAnimations(this.state.array, 100);
    console.log('the animated array is:')
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (i % 2 == 0) {
        let color = SECONDARY_COLOR;
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else {
        let color = PRIMARY_COLOR;
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  binarySearch() {
    const animations = getSortedAnimations(this.state.array, 100);
    console.log('the animated array is:')
    console.log(animations)
    // DISPLAY the sorted array in red color
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      let color = PRIMARY_COLOR;
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        barOneStyle.backgroundColor = color;
      }, i * 20);
    }
    // Display the Binary Search
    const animations2 = getBinarySearchAnimations(this.state.array, 100)
    console.log('the animated array is:')
    console.log(animations2)
    // TODO: Binary Search logic
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <br />
        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.insertionSort()}>Insertions Sort</button>
        <button onClick={() => this.linearSearch()}>Linear search for 100</button>
        <button onClick={() => { this.binarySearch() }}>Binary Search for 100</button>
        <button onClick={() => this.testSortingAlgorithms()}>
          Test Sorting Algorithms (BROKEN)
        </button>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
