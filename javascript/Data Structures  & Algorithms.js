// ------------------------------------------------------------
// ---------- Data Structures & Algorithms ----------
// ------------------------------------------------------------

// ______________________________
// @Big 0
// Link - https://www.bigocheatsheet.com/
// ------------------------------

// 0(1)       -- Constant Time
// 0(logn)    -- Logarithmic Time
// 0(n)       -- Linear Time
// 0(n log n) --
// 0(n^2)     -- Quadratic Time
// 0(2n)      --
// 0(n!)      --

// ______________________________
// @Arrays
// Link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ------------------------------

// Arrays are random items (data elements) in a list format. They can be either sorted or unsorted and contain duplicates. Each data element in an array is indexed, each index holds the data element (value).

// Analogy
// ------------------------------

// Arrays can be thought of like shopping lists.

// Big 0 - Time Complexity
// ------------------------------

// Reading      - 0(1) -- Constant Time
// Searching    - 0(n) -- Linear Time
// Insertion    - 0(n) -- Linear Time
// Deletion     - 0(n) -- Linear Time

// Commonly Used Operations
// ------------------------------

// Reading:
// This is simply asking the computer what value is at index[x]. Because a computer doesn't have to do anything to read from a given index the computer can do this look up in 1 step.

// Each memory block in RAM or on a disk is addressed and when an array is created the computer makes note of where the array begins. With this knowledge when it is asked what value is at arrayName[3], it can easily jump straight to that index giving you the answer.

// Searching:
// This can be seen as the inverse of reading. Here we're asking the computer if a particular value (data element) is within an array.

// A computer can jump instantly to an index and return the value there, however it has no idea what value is where within an array. Because of this, searching an array requires far more time than simply reading from it.

// At it's basic level, the computer would have to go through an array linearly looking at each index checking if the value requested is within the array.

// Insertion:
// Inserting data elements into an array is different depending on where you want to insert the new value.

// Inserting at the end of an array can be done in one step, as the computer knows where the array begins and the length of the array. Then it knows where to add the new element instantly.

// However adding data elements to the beginning or middle of an array is totally differnt. The reason being all elements are indexed. So if we change the order in some way we have to then re-index all elements that are affected with our insertion.

// Deletion:
// This can be seen as the inverse of insertion. Depending where from the array you would like to delete from, the remaining data elements would need to be shifted. As arrays do not like having empty data elements.

// Commonly Used Methods
// ------------------------------

// arrayName[x]
//      Reading from an index
// Returns the value at that index

// arrayName.includes(x)
// arrayName.indexOf(x) !== -1
//      Searching for a specific value
// Returns true / false

// arrayName.push(x)
//      Appending a new element to the end
// arrayName.unshift(x)
//      inserts a new element at the beginning

// arrayName.pop(x)
//      Deletes last element from array
// arrayName.shift(x)
//      Deletes first element in an array

// arrayName.splice(starting index, delete count, item)
//      Changes the contents of an array by removing or replacing
//      excisting elements

// Examples
// ------------------------------

const arrShoppingList = [
  "apples",
  "pears",
  "oranges",
  "blackberries",
  "tomatoe",
];

// Reading from an Array:
const arrayRead = (n) => {
  console.log(arrShoppingList[n]);
};
// arrayRead(3);

// Searching an Array:
const arraySearch = (n) => {
  console.log(arrShoppingList.includes(n));
  console.log(arrShoppingList.indexOf(n) !== -1);
};
// arraySearch("oranges");

// Inserting into an Array
const arrayInsert = (n) => {
  // Appending to the end
  arrShoppingList.push("onions");
  console.log(arrShoppingList);
  // Inserting at the beginning
  arrShoppingList.unshift("blueberries");
  console.log(arrShoppingList);
};
// arrayInsert();

// Deleting from an array
const arrayDeletion = (n) => {
  // Deleting from the end
  arrShoppingList.pop();
  console.log(arrShoppingList);
  //   Deleting from the beginning
  arrShoppingList.shift();
  console.log(arrShoppingList);
};
// arrayDeletion();

// ______________________________
// @Sets
// Link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// ------------------------------

// Sets allow you to store unique values of any type. They're collections of values just as array's are but only allow you to store unique values.

// Analogy
// ------------------------------

// Sets are just like the phone book, for every phone number in the phone book can only have 1 person or 1 home associated with it.

// Big 0 - Time Complexity
// ------------------------------

// Reading      - 0(1)    -- Constant Time
// Searching    - 0(n)    -- Linear Time
// Insertion    - 0(n+1)  -- Linear Time
// Deletion     - 0(n)    -- Linear Time

// Commonly Used Operations
// ------------------------------

// Reading:
// This is the exact same process and time complexity as reading from an array.

// Searching:
// This is the exact same process and time complexity as searching from an array.

// Insertion:
// This is where sets differ from arrays. When inserting into a set, because sets don't allow duplicate data elements. The entire set must first be searched 1 data element at a time, checking the new data element isn't already within the array. Only once this full search has been made will the insertion take place, if the data element isn't already present of course.

// Because of this full search the time complexity for set insertion at best would be 0(n+1) - That is a full search of n elements and then a final insertion step. If however the new data element is to be inserted at the beginning of the array, the time complexity would change to 0(2n+1) - The full search first then the shift and re-indexing of all elements plus the 1 step of insertion.

// Deletion:
// This is the exact same process and time complexity as deletion from an array.

// Commonly Used Methods
// ------------------------------

// setName.add(x)
//      Adding to a set
// Will add to the end of the set

// setName.has(x)
//      Reading from an value
// Returns the true / false
// Apparently Set objects are mostly implemented like hash tables. Given this, the .has method for the most part has a time complexity of 0(1)

// setName.delete()
//    Deletes specified element

// for (let value of setName)
//    This will iterate through a set

// Examples
// ------------------------------

const setShoppingList = new Set([
  "apples",
  "pears",
  "oranges",
  "blackberries",
  "tomatoe",
]);

// Adding to a Set:
const setAdd = () => {
  console.log(setShoppingList.add("blueberries"));
};
// setAdd();

// Reading from an Set:
const setRead = (n) => {
  console.log(setShoppingList.has(n));
};
// setRead("oranges");

// Deleting from a set:
const setDelete = () => {
  console.log(setShoppingList.delete("blueberries"));
  console.log(setShoppingList);
};
// setDelete();

// Iterating through a set:
const setIteration = () => {
  for (let item of setShoppingList) {
    console.log(item);
  }
};
// setIteration();

// ______________________________
// @Ordered Array
// Link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// ------------------------------

// Ordered arrays are simply that. Strings are ordered alphabetically and intergers are ordered numerically based on the left most character (however not in sequence) - [1, 10, 100, 2, 22, 30, 4].

// Analogy
// ------------------------------

// Think of the order of a race, from first to last.

// Big 0 - Time Complexity
// ------------------------------

// Reading      - 0(1)    -- Constant Time
// Searching    - 0(n)    -- Linear Time
// Insertion    - 0(n+1)  -- Linear Time
// Deletion     - 0(n)    -- Linear Time

// Commonly Used Operations
// ------------------------------

// Reading:
// This is the exact same process and time complexity as reading from an array.

// Searching:
// The main difference between searching a standard array and an ordered array, is that we can stop searching an ordered array part way through our search.

// If for example our array is arrOrdered[1,2,5,6,7] and we would like to know if it contains a [3]. As soon as our search gets to index 2 our search can terminate returning false, because we know that a 3 can't come after a 5 in an ordered array.

// Insertion:
// As the insertion will need to go into a specific part of the array, first a search will need to be performed. Once the insertion point is found then a shift of the remaining data elements is needed and only then cant he insertion take place.

// No matter where within the ordered array the insertion needs to be there will always be an equal amount of searching + shifting, basically 0(n).

// Deletion
// This is the exact same process and time complexity as deletion from an array.

// Commonly Used Methods
// ------------------------------

// Examples
// ------------------------------

const unorderedArray = [2, 3, 1, 6, 8, 7, 9];
// console.log(unorderedArray);
const orderedArray = unorderedArray.sort();
// console.log(orderedArray);

// Ordered Array Search
const orderedArraySearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return console.log(`${key} is in the array`);
    }
  }
  return console.log(`${key} is not in the array`);
};

// orderedArraySearch(orderedArray, 5);

// ______________________________
// @Binary Search - Ordered Array
// Link - https://www.geeksforgeeks.org/binary-search-in-javascript/
// ------------------------------

// A binary search can only be performed on an ordered list, based on the nature of how it searches a list of data elements.

// A binary search simply eliminates half of the data elements at every guess / search. If we ask the computer to check if 80 is within an array containing 1-100, it first checks the mid point 50. It then learns 80 is higher so will now check the next mid point 75, and some on checking mid points of the remaining numbers until it either finds a match or see's the number is not within the array.

// The power of the binary search is more evident in larger arrays. Everytime the array doubles in size the amount of steps taken to perform the search only increses by one step.

// Worst case for an array of 100, 200, 400:
// Linear = 100, 200, 400
// Binary = 7, 8, 9

// Analogy
// ------------------------------

// Like a guessing game always choosing the mid point for your guess.

// Big 0 - Time Complexity
// ------------------------------

// Reading      - 0(1)        -- Constant Time
// Searching    - 0(logN)     -- Logarithmic Time
// Insertion    - 0(logN+1)   -- Logarithmic Time
// Deletion     - 0(logN+1)   -- Logarithmic Time

// Commonly Used Operations
// ------------------------------

// Reading:
// This is the exact same process and time complexity as reading from an array.

// Searching:
// As each search half's the number of elements from the array at each step, binary search is extremly fast compared to linear searching.

// Insertion:
// As the binary search would be used for the insertion of a new element, again this vastly increases the speed of insertion.

// Deletion:
// As the binary search would be used for the deletion of a new element, again this vastly increases the speed of deletion.

// Commonly Used Methods
// ------------------------------

// This is a searching algorithm / technique of an ordered array. So it would use methods inline with standard arrays.

// Examples
// ------------------------------

const binarySearchArray = [1, 2, 3, 4, 5, 7, 8, 9];

const binarySearch = (arr, n) => {
  // We need to define the hi & low boundary of our array
  let start = 0;
  let end = arr.length - 1;

  // Wile loop defines start never going higher than end
  while (start <= end) {
    // Middle is our search
    // This math splits our array & sets our midpoint to the left
    let middle = Math.floor((start + end) / 2);

    // This will exit our loop once middle = n
    if (arr[middle] === n) {
      return `Found at index: ${middle}`;
      // This checks if middle is less than n
    } else if (arr[middle] < n) {
      // This resets start if n is higher than middle
      // So removes all of the lower numbers from it's search
      start = middle + 1;
    } else {
      // This resets end if n is lower than middle
      // So removes all of the higher numbers from it's search
      end = middle - 1;
    }
  }
  return `Not in array`;
};
// console.log(binarySearch(binarySearchArray, 7));
// console.log(binarySearch(binarySearchArray, 6));
// console.log(binarySearch(binarySearchArray, 100));

// Recursively version
const recursiveBinarySearch = (arr, n, start, end) => {
  if (start > end) return `Not in array`;

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === n) return `Found at index: ${middle}`;

  if (arr[middle] < n) {
    return recursiveBinarySearch(arr, n, middle + 1, end);
  } else {
    return recursiveBinarySearch(arr, n, start, middle - 1);
  }
};

// console.log(
//   recursiveBinarySearch(binarySearchArray, 7, 0, binarySearchArray.length - 1)
// );
// console.log(
//   recursiveBinarySearch(binarySearchArray, 6, 0, binarySearchArray.length - 1)
// );
// console.log(
//   recursiveBinarySearch(binarySearchArray, 100, 0, binarySearchArray.length - 1)
// );

// ______________________________
// @Bubble Sort
// Link -
// ------------------------------

// Bubble sort will look at two joining indexes and compare their values. If the left value is higher than the right then it will swap the two values. If the right is the higher value it will do nothing with the values. It then moves 1 index to the right and continues the comparisons, until the highest move value it found is all the way to the end of the array.

// Bubble sorts are relatively inefficient, the only time they will perform well would be with nearly sorted arrays. But only when if they've the isSorted variable added to end the looping early should there be nothing sorted in one full pass.

// Analogy
// ------------------------------

// The highest value in an array will bubble it's way to the top / end of an array. The bubble sort will keep looping the array bubbling the highest value to the end until all the data elements are in ascending order.

// Big 0 - Time Complexity
// ------------------------------

// 0(n^2) -- Quadtratic Time

// Examples
// ------------------------------

const randomNearlyArray = [10, 1, 2, 3, 4];
const randomArray = [33, 28, 50, 91, 12];

function bubbleSort(arr) {
  // This variable is to break out of our loops if we complete one full loop with no sorting. The reason being if we loop once and nothing needs sorting then by definition the array is fully sorted
  let isSorted;
  let outerCounter = 0;
  let innerCounter = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    // At the start of every loop we set isSorted to true
    isSorted = true;
    outerCounter++;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      innerCounter++;
      // Visual output of our loops
      console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // If we needed to sort, then we set isSorted to false, so we can start another loop
        isSorted = false;
      }
    }
    if (isSorted) break;
  }
  // Loop counts
  console.log(`Outer loop ${outerCounter}`);
  console.log(`Inner loop ${innerCounter}`);
  // Final array
  console.log(arr);
}
// bubbleSort(randomNearlyArray);
// bubbleSort(randomArray);

// ______________________________
// @Selection Sort
// Link - https://www.doabledanny.com/selection-sort-javascript
// ------------------------------

// Starting from the beginning to the end of an array, we insepct every element making note of the lowest data element in the array. Once we have done a full pass we then move the lowest element to the start of the array. We then continue looping through the array in the same fasion passing the lowest value to the right of the previous lowest until the array is fully sorted.

// Analogy
// ------------------------------

// Loop and track, then shift to the left.

// Big 0 - Time Complexity
// ------------------------------

// 0(n^2) -- Quadtratic Time
// 0(n^2 / 2) -- Twice as quick as Bubble sort

// Examples
// ------------------------------

const selectionSortArray = [5, 1, 3, 9, 8, 4, 6, 7];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);
    let lowestNumberIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex != i) {
      [arr[i], arr[lowestNumberIndex]] = [arr[lowestNumberIndex], arr[i]];
    }
  }
  return console.log(arr);
};
// selectionSort(selectionSortArray);

// ______________________________
// @Insertion Sort
// Link -
// ------------------------------

// Given an array that we loop through from index 1, we remove and store in a temp variable index 1's value. We then compare everything thing to the left of that index. If the compared element is larger, we move that element to the right into the empty slot. If there is nothing else to compare then we re-add the temp value back into the array at the remaining slot.

// We then continue our loop to the next index and continue as above, shifting higher values than the temp value to the right. And inserting the original value at the next empty slot if the compared value isn't any larger.

// Analogy
// ------------------------------

// Big 0 - Time Complexity
// ------------------------------

// 0(n^2) -- Quadratic Time

// Examples
// ------------------------------

const insertionSortArray = [5, 1, 3, 9, 8, 4, 6, 7];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return console.log(arr);
};
// insertionSort(insertionSortArray);

// ______________________________
// @
// Link -
// ------------------------------

// Analogy
// ------------------------------

// Big 0 - Time Complexity
// ------------------------------

// Reading      - 0(1)    -- Constant Time
// Searching    - 0(n)    -- Linear Time
// Insertion    - 0(n+1)  -- Linear Time
// Deletion     - 0(n)    -- Linear Time

// Commonly Used Operations
// ------------------------------

// Reading:

// Searching:

// Insertion:

// Deletion

// Commonly Used Methods
// ------------------------------

// Examples
// ------------------------------

// ______________________________
// @
// Link -
// ------------------------------

// Analogy
// ------------------------------

// Big 0 - Time Complexity
// ------------------------------

// Reading      - 0(1)    -- Constant Time
// Searching    - 0(n)    -- Linear Time
// Insertion    - 0(n+1)  -- Linear Time
// Deletion     - 0(n)    -- Linear Time

// Commonly Used Operations
// ------------------------------

// Reading:

// Searching:

// Insertion:

// Deletion

// Commonly Used Methods
// ------------------------------

// Examples
// ------------------------------

// ______________________________
// @
// Link -
// ------------------------------

// Analogy
// ------------------------------

// Big 0 - Time Complexity
// ------------------------------

// Reading      - 0(1)    -- Constant Time
// Searching    - 0(n)    -- Linear Time
// Insertion    - 0(n+1)  -- Linear Time
// Deletion     - 0(n)    -- Linear Time

// Commonly Used Operations
// ------------------------------

// Reading:

// Searching:

// Insertion:

// Deletion

// Commonly Used Methods
// ------------------------------

// Examples
// ------------------------------

// Random Problems:

const duplicateArray = [10, 5, 1, 2, 6, 5];

const hasDuplicates = (arr) => {
  let steps = 0;
  let existingNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    steps++;
    if (existingNumbers[arr[i]] === 1) {
      console.log(steps);
      console.log(existingNumbers);
      return console.log(`Duplicate FOUND!`);
    } else {
      existingNumbers[arr[i]] = 1;
    }
  }
  console.log(steps);
  console.log(existingNumbers);
  return console.log(`No duplicates found!`);
};

// hasDuplicates(duplicateArray);
