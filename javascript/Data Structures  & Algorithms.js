// ------------------------------------------------------------
// ---------- Data Structures & Algorithms ----------
// ------------------------------------------------------------

// ______________________________
// @Big 0
// ------------------------------

// 0(1)     -- Constant Time
// 0(n)     -- Linear Time
// 0(logn)
// 0(n2)
// 0(2n)

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

// Analogy
// ------------------------------

// Big 0 - Time Complexity
// ------------------------------

// Commonly Used Operations
// ------------------------------

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

// Commonly Used Operations
// ------------------------------

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

// Commonly Used Operations
// ------------------------------

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

// Commonly Used Operations
// ------------------------------

// Commonly Used Methods
// ------------------------------

// Examples
// ------------------------------
