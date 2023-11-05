import { bowlingScore } from "./kata_2_bowling";

test("Return 12 from 3 rolls", () => {
  expect(bowlingScore(["4","4","4"])).toBe(12);
});

// for this test the
test("Return 10 from 4 rolls (ie 2 frames)", () => {
    expect(bowlingScore(["1","2","3","4"])).toBe(18);
  });

// test("Return 6 from 3 rolls of 1", () => {
//     expect(bowlingScore([2,1,3,1,4,1])).toBe(12);
//   });

//   test("Return 6 from 3 rolls of 1", () => {
//     expect(bowlingScore([4,6,3,3])).toBe(19);
//   });
