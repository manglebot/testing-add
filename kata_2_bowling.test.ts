import { bowlingScore } from "./kata_2_bowling";

test("Return 33 from 3 rolls", () => {
  expect(bowlingScore(["4","4","4"])).toBe(12);
});

// test("Return 6 from 3 rolls of 1", () => {
//     expect(bowlingScore([2,1,3,1,4,1])).toBe(12);
//   });

//   test("Return 6 from 3 rolls of 1", () => {
//     expect(bowlingScore([4,6,3,3])).toBe(19);
//   });
