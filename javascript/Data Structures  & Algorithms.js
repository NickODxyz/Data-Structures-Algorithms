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

// Each memory block in RAM or on a disk is addressed and when an array is created the computer makes note of where the array begins. With this knowledge when it is asked what value is at array[3], it can easily jump straight to that index giving you the answer.

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
// ------------------------------

// Sets allow you to store unique values of any type. They're collections of values just as array's are but only allow you to store unique values.

// Analogy
// ------------------------------

// Sets are just like the phone book, for every phone number in the phone book can only have 1 person or 1 home associated with it.

// Commonly Used Operations
// ------------------------------

// Reading:

// Searching:

// Insertion:

// Deletion:

// Commonly Used Methods
// ------------------------------

// Examples
// ------------------------------
