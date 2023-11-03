import {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
} from "../challenges/exercise005";

describe("findNextNumber", () => {
  //Arrange
  test("returns the next number after the given number in the array", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 7)).toBe(8);
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 1)).toBe(10);
    //Act and Assert
    expect(findNextNumber([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
  });

  //Arrange
  test("if the number is not found in the array, returns null", () => {
  //Act and Assert
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  });

  //Arrange
  test("if the number is found more than once, returns the number after the first instance", () => {
  //Act and Assert
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
  });

  //Arrange
  test("if the number is found in the final index position of the array, returns null", () => {
  //Act and Assert
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
  });
});


describe("count1sand0s", () => {
  //Arrange
  test("returns an object with the count of 1s and 0s in a string", () => {
    //Act and Assert
    expect(count1sand0s("11000")).toEqual({
      1: 2,
      0: 3,
    });

    //Act and Assert
    expect(count1sand0s("0101010111")).toEqual({
      1: 6,
      0: 4,
    });
    //Act and Assert
    expect(count1sand0s("1111111")).toEqual({
      1: 7,
      0: 0,
    });
    //Act and Assert
    expect(count1sand0s("0111")).toEqual({
      1: 3,
      0: 1,
    });
  });
});

describe("reverseNumber", () => {
// Arrange
  test("reverses the digits of a number", () => {
    //Act and Assert
    expect(reverseNumber(5)).toBe(5);
    expect(reverseNumber(104)).toBe(401);
    expect(reverseNumber(12345)).toBe(54321);
    expect(reverseNumber(100)).toBe(1); // No leading 0 necessary
  });
});

describe("sumArrays", () => {
  test("returns the total of the numbers in all sub arrays", () => {
    // Arrange
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
    //Act and Assert
    expect(sumArrays(arrs)).toBe(44);
  });
});

describe("arrShift", () => {
  // Arrange
  test("returns an array with the first and last items swapped", () => {
    //Act and Assert
    expect(arrShift([1, 2])).toEqual([2, 1]);
    expect(arrShift([1, 2, 3])).toEqual([3, 2, 1]);
    expect(arrShift([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

  test("makes no difference when the array length is < 2", () => {
    expect(arrShift([1])).toEqual([1]);
    expect(arrShift([])).toEqual([]);
  });
});

describe("findNeedle", () => {
  test("returns true if any of the properties of an object contain the specified string", () => {
      // Arrange
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    //Act and Assert
    expect(findNeedle(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    // Arrange
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    //Act and Assert
    expect(findNeedle(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    // Arrange
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    //Act and Assert
    expect(findNeedle(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    // Arrange
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    //Act and Assert
    expect(findNeedle(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    // Arrange
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    //Act and Assert
    expect(findNeedle(obj1, "warrington")).toBe(true);
    expect(findNeedle(obj1, "linnmon")).toBe(true);
    expect(findNeedle(obj1, "Liverpool")).toBe(false);
  });
});

describe("getWordFrequencies", () => {
  // Arrange
  test("returns the frequencies of each word in a string", () => {
    
    //Act and Assert
    expect(getWordFrequencies("hello world")).toEqual({
      hello: 1,
      world: 1,
    });

    expect(getWordFrequencies("the cat is hairier than the rat")).toEqual({
      the: 2,
      cat: 1,
      is: 1,
      hairier: 1,
      than: 1,
      rat: 1,
    });

    expect(getWordFrequencies("hello hello hello")).toEqual({
      hello: 3,
    });
  });


  // Arrange
  test("ignores capitalisation", () => {
    //Act and Assert
    expect(getWordFrequencies("Hello hello hello")).toEqual({
      hello: 3,
    });
  });

  test("ignores punctuation", () => {
    // Hint: Google "JavaScript remove special characters from string" to get some ideas!
    //Act and Assert
    expect(
      getWordFrequencies("Hello, hello hello! What have we here?")
    ).toEqual({
      hello: 3,
      what: 1,
      have: 1,
      we: 1,
      here: 1,
    });
  });
});
