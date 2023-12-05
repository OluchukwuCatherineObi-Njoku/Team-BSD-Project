// Return Early, Return Often
// Source: https://blog.humphd.org/vocamus-1421/

// Example (Calculating Rectangle Area)
// DONT DO THIS
export function calculateRectangleArea_BAD(length: number, width: number) {
  if (length > 0) {
    if (width > 0) {
      return length * width;
    } else {
      console.log('Invalid width: must be greater than 0.');
    }
  } else {
    console.log('Invalid length: must be greater than 0.');
  }
  return null;
}

// Example (Calculating Rectangle Area)
// DO THIS
export function calculateRectangleArea_GOOD(length: number, width: number) {
  if (length <= 0) {
    console.log('Invalid length: must be greater than 0.');
    return null;
  }

  if (width <= 0) {
    console.log('Invalid width: must be greater than 0.');
    return null;
  }

  return length * width;
}

// Simplify, and minimize code, make it clear, concise

// Example (Function that returns true if arg is even)
// DONT DO THIS
export function isEven_BAD(num: number) {
  if (num % 2 == 0) {
    return true;
  } else if (num % 2 == 1) {
    return false;
  }
}

// Example (Function that returns true if arg is even)
// DO THIS
export function isEven_GOOD(num: number) {
  return num % 2 == 0;
}

// Example (Function that returns "Even" if number is even, "ODD" otherwise)
// DONT DO THIS
export function EvenOrOdd_BAD(num: number) {
  if (num % 2 == 0) {
    return 'Even';
  } else if (num % 2 == 1) {
    return 'Odd';
  }
}

// Example (Function that returns "Even" if number is even, "ODD" otherwise)
// DO THIS
export function EvenOrOdd_GOOD(num: number) {
  return num % 2 == 0 ? 'Even' : 'Odd';
}

// Allows yourself extra variables to make your life easier
// And make the error clear

export function sumUntilZero_BAD(numbers: number[]) {
  let total = 0;

  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] === 0) {
      break;
    }
    total += numbers[i]!;
  }

  return total;
}

export function sumUntilZero_GOOD(numbers: number[]) {
  let total = 0;
  let hasZero = false;

  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] === 0) {
      hasZero = true;
      break;
    }
    total += numbers[i]!;
  }

  if (hasZero) {
    // or do custom logic to handle if there is a zero..
    console.log('Encountered a zero, stopping sum.');
  }

  return total;
}

// Or imagine this scenario, you have a linked list
// In this linked list you have a function that returns the length
//
// Instead of looping through the entire linked list to get the length
// Just create 1 attribute in the linked list, that gets incremented
// every single time an item is added.
